This is all the code from the first homework

~: dir
codefriends
~: mkdir 001-command-line
~: dir
001-command-line  codefriends
~: ~/codefriends: tree
zsh: no such file or directory: /home/mvandore/codefriends:
~: codefriends: tree
zsh: command not found: codefriends:
~: tree
zsh: command not found: tree
~: dir
001-command-line  codefriends
~: rmdir 001-command-line
~: dir
codefriends
~: ~/codefriends
~/codefriends: tree
zsh: command not found: tree
~/codefriends: mkdir 001-command-line
~/codefriends: dir
001-command-line  codefriends.sh
~/codefriends: ~/001-command-line
zsh: no such file or directory: /home/mvandore/001-command-line
~/codefriends: ~/codefriends/001-command-line
~/codefriends/001-command-line: mkdir projects
~/codefriends/001-command-line: touch notes.md
~/codefriends/001-command-line: notes.md
zsh: command not found: notes.md
~/codefriends/001-command-line: code
~/codefriends/001-command-line: cd codefriends
cd: no such file or directory: codefriends
~/codefriends/001-command-line: dir
notes.md  projects
~/codefriends/001-command-line: cd ~/codefriends
~/codefriends: tree
zsh: command not found: tree
~/codefriends:
~/codefriends: apt-get install tree
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?
zsh: command not found: brew
~: sudo apt install tree
[sudo] password for mvandore:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  tree
0 upgraded, 1 newly installed, 0 to remove and 91 not upgraded.
Need to get 43.0 kB of archives.
After this operation, 115 kB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu focal/universe amd64 tree amd64 1.8.0-1 [43.0 kB]
Fetched 43.0 kB in 2s (27.0 kB/s)
Selecting previously unselected package tree.
(Reading database ... 34068 files and directories currently installed.)       
Preparing to unpack .../tree_1.8.0-1_amd64.deb ...
Unpacking tree (1.8.0-1) ...
Setting up tree (1.8.0-1) ...
Processing triggers for man-db (2.9.1-1) ...
~: cd ~/codefriends
~/codefriends: tree
.
├── 001-command-line
│   ├── notes.md
│   └── projects
└── codefriends.sh

2 directories, 2 files
~/codefriends: rm codefriends.sh
rm: remove write-protected regular empty file 'codefriends.sh'? 
~/codefriends: tree
.
├── 001-command-line
│   ├── notes.md
│   └── projects
└── codefriends.sh

2 directories, 2 files
~/codefriends: rm codefriends.sh
rm: remove write-protected regular empty file 'codefriends.sh'? y
~/codefriends: tree
.
└── 001-command-line
    ├── notes.md
    └── projects

2 directories, 1 file
~/codefriends: cd ~/codefriends/001-command-line/projects
codefriends/001-command-line/projects: mkdir command-line-wizard
codefriends/001-command-line/projects: tree
.
└── command-line-wizard

1 directory, 0 files
codefriends/001-command-line/projects: cd 
codefriends/001-command-line/projects: cd codefriends/001-command-line/projects/command-line-wizard
cd: no such file or directory: codefriends/001-command-line/projects/command-line-wizard
codefriends/001-command-line/projects: cd ~/codefriends/001-command-line/projects/command-line-wizard
001-command-line/projects/command-line-wizard: touch tree.out
001-command-line/projects/command-line-wizard: dir
tree.out
001-command-line/projects/command-line-wizard: cd ~/
~: dir
codefriends
~: tree
.
└── codefriends
    └── 001-command-line
        ├── notes.md
        └── projects
            └── command-line-wizard
                └── tree.out

4 directories, 2 files
~: cd ~/codefriends/                  
~/codefriends: ls   
001-command-line
~/codefriends: touch newday.sh
~/codefriends: code newday.sh
~/codefriends: newday.sh 002-test
zsh: command not found: newday.sh
~/codefriends: ./newday.sh 002-test
zsh: permission denied: ./newday.sh
~/codefriends: chomd 
zsh: command not found: chomd
~/codefriends: chmod ~
chmod: missing operand after ‘/home/mvandore’
Try 'chmod --help' for more information.
~/codefriends: chmod +x
chmod: missing operand after ‘+x’
Try 'chmod --help' for more information.
~/codefriends: chmod +x newday.sh
~/codefriends: ./newday.sh 002-test
all set!
~/codefriends: ls
001-command-line  002-test  newday.sh
~/codefriends: rm 002-test
rm: cannot remove '002-test': Is a directory
~/codefriends: rmdir 002-test
rmdir: failed to remove '002-test': Directory not empty
~/codefriends: rm -r 002-test
~/codefriends: ls
001-command-line  newday.sh
~/codefriends:
~/codefriends: cd ~/codefriends/001-command-line 
~/codefriends/001-command-line: touch homework1.md 
~/codefriends/001-command-line: rm homework1.md
~/codefriends/001-command-line: ls                                
notes.md  projects
~/codefriends/001-command-line: touch homework1.md
~/codefriends/001-command-line: code hoemwork1.md
~/codefriends/001-command-line:
~/codefriends/001-command-line: