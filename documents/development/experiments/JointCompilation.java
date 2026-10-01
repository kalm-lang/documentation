import com.sun.source.util.JavacTask;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import javax.tools.SimpleJavaFileObject;
import javax.tools.ToolProvider;

/** Run with: java docs/experiments/JointCompilation.java /tmp/kalm-joint-spike */
class JointCompilation {
    static class Source extends SimpleJavaFileObject {
        private final String code;
        Source(String name, String code) {
            super(URI.create("string:///" + name + ".java"), Kind.SOURCE);
            this.code = code;
        }
        @Override public CharSequence getCharContent(boolean ignore) { return code; }
    }

    public static void main(String[] args) throws Exception {
        var output = Path.of(args[0]);
        Files.createDirectories(output);
        var compiler = ToolProvider.getSystemJavaCompiler();
        var helper = new Source("JavaHelper", "public class JavaHelper { public static String text() { return \"Java\"; } public static String call() { return AppKalm.greet(); } }");
        var stub = new Source("AppKalm", "public class AppKalm { public static String greet() { throw new UnsupportedOperationException(\"STUB\"); } }");
        try (var manager = compiler.getStandardFileManager(null, null, null)) {
            var task = (JavacTask) compiler.getTask(null, manager, null,
                    List.of("--release", "25", "-proc:none", "-d", output.toString()), null, List.of(helper, stub));
            task.parse();
            task.analyze();
            if (task.getElements().getTypeElement("JavaHelper") == null) throw new AssertionError("missing Java symbol");
        }
        try (var files = Files.list(output)) {
            if (files.findAny().isPresent()) throw new AssertionError("analysis generated classes");
        }
        var implementation = new Source("AppKalm", "public class AppKalm { public static String greet() { return \"Hello \" + JavaHelper.text(); } public static void main(String[] args) { System.out.println(JavaHelper.call()); } }");
        try (var manager = compiler.getStandardFileManager(null, null, null)) {
            if (!compiler.getTask(null, manager, null, List.of("--release", "25", "-d", output.toString()), null,
                    List.of(helper, implementation)).call()) throw new AssertionError("joint compilation failed");
        }
        System.out.println("Analysis produced no classes; real Java/Kalm cycle compiled successfully.");
    }
}
