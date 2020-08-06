# :bug: Description

The `git-merge-from-svn` script from https://github.com/jwiegley/git-scripts/blob/master/git-merge-from-svn is a small `CLI` tool which is made to help people to automate `git` commands interaction.
However, the script formats `unsanitized user-supplied data` inside the commands which will be `executed`, leading to `OS command injection` and `arbitrary command execution`.

# :fire: PoC

1. Download the https://github.com/jwiegley/git-scripts/blob/master/git-merge-from-svn file
2. `ruby git-merge-from-svn -b "test" "test; touch HACKED; #"`
3. A new `HACKED` file is created
