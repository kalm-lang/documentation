---
{
  "title": "Getting started",
  "order": 0
}
---

## Set up Kalm

Use a full JDK 25 or newer and Maven. Kalm currently uses aligned development snapshots from GitHub Packages. Set
`KALM_PACKAGES_USER` and `KALM_PACKAGES_READ_TOKEN` to read the packages.

Clone Kalm using Git, then build it and add its launcher to your shell's path:

:::compare
```powershell Terminal {"os":"windows","shell":"powershell"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
$env:PATH = "$($PWD.Path)\bin;$env:PATH"
kalm.bat --version
```
```batch Terminal {"os":"windows","shell":"cmd"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
set "PATH=%CD%\bin;%PATH%"
kalm.bat --version
```
```bash Terminal {"os":"macos","shell":"bash"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
export PATH="$PWD/bin:$PATH"
kalm --version
```
```zsh Terminal {"os":"macos","shell":"zsh"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
export PATH="$PWD/bin:$PATH"
kalm --version
```
```powershell Terminal {"os":"macos","shell":"powershell"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
$env:PATH = "$($PWD.Path)/bin:$env:PATH"
kalm --version
```
```bash Terminal {"os":"linux","shell":"bash"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
export PATH="$PWD/bin:$PATH"
kalm --version
```
```zsh Terminal {"os":"linux","shell":"zsh"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
export PATH="$PWD/bin:$PATH"
kalm --version
```
```powershell Terminal {"os":"linux","shell":"powershell"}
git clone https://github.com/kalm-lang/tools.git
cd tools
mvn -f cli/pom.xml package
$env:PATH = "$($PWD.Path)/bin:$env:PATH"
kalm --version
```
:::

Keep this shell open for the commands below. Code preferences selects the commands for your operating system and shell.

## Write your first program

::::dialect kalm
Create a separate project directory, then save `src/main/kalm/App.kalm`:
::::

::::dialect kalms
Create a folder for your experiments, then save `App.kalms` directly inside it:
::::

::::compare
```kalm App.kalm {"style":"indentation"}
pub fun main() -> void:
    sayLine("Hello, Kalm!")
```
```kalm App.kalm {"style":"braces"}
pub fun main() -> void {
    sayLine("Hello, Kalm!")
}
```
```kalms App.kalms {"style":"indentation"}
sayLine("Hello, Kalm!")
```
```kalms App.kalms {"style":"braces"}
sayLine("Hello, Kalm!")
```
```java App.java
void main() {
    System.out.println("Hello, Kalm!");
}
```
::::

::::dialect kalm
From your project directory:

:::compare
```powershell Terminal {"os":"windows","shell":"powershell"}
kalm.bat run
```
```batch Terminal {"os":"windows","shell":"cmd"}
kalm.bat run
```
```bash Terminal {"os":"macos","shell":"bash"}
kalm run
```
```zsh Terminal {"os":"macos","shell":"zsh"}
kalm run
```
```powershell Terminal {"os":"macos","shell":"powershell"}
kalm run
```
```bash Terminal {"os":"linux","shell":"bash"}
kalm run
```
```zsh Terminal {"os":"linux","shell":"zsh"}
kalm run
```
```powershell Terminal {"os":"linux","shell":"powershell"}
kalm run
```
:::
::::

::::dialect kalms
From the folder containing your script:

:::compare
```powershell Terminal {"os":"windows","shell":"powershell"}
kalm.bat shell -f App.kalms
```
```batch Terminal {"os":"windows","shell":"cmd"}
kalm.bat shell -f App.kalms
```
```bash Terminal {"os":"macos","shell":"bash"}
kalm shell -f App.kalms
```
```zsh Terminal {"os":"macos","shell":"zsh"}
kalm shell -f App.kalms
```
```powershell Terminal {"os":"macos","shell":"powershell"}
kalm shell -f App.kalms
```
```bash Terminal {"os":"linux","shell":"bash"}
kalm shell -f App.kalms
```
```zsh Terminal {"os":"linux","shell":"zsh"}
kalm shell -f App.kalms
```
```powershell Terminal {"os":"linux","shell":"powershell"}
kalm shell -f App.kalms
```
:::
::::

```text
Hello, Kalm!
```

## Keep going

Follow [Learn Kalm](/learn/) to build a small text-statistics CLI.
Browse the [language guide](/docs/language/) for explanations or
[Examples](/examples/) for a small piece of syntax.

For an existing Java project, use the [Maven](/docs/maven/) or
[Gradle](/docs/gradle/) integration. The [CLI guide](/docs/cli/)
covers checking, formatting, building, and testing.
