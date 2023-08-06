# this is a script that automatically create a branch and pushes to remote repo
#!/bin/bash

#!/bin/bash

# Function to show usage
show_usage() {
  echo "Usage: $0 [-c] [branch_name] [cMessage]"
}

# Check if arguments are provided
if [ $# -lt 1 ]; then
  show_usage
  exit 1
fi

# Check if the first argument is -c
if [ "$1" = "-c" ]; then
  if [ $# -lt 3 ]; then
    show_usage
    exit 1
  fi

  bName="$2"
  cMessage="$3"

  # Perform git commands
  git add -A
  git commit -m "$cMessage"

  git push origin "$bName"

elif [ $# -eq 2 ]; then
  bName="$1"
  cMessage="$2"

  # Perform git commands
  git add -A
  git commit -m "$cMessage"
  git checkout -b "$bName"
  git push origin "$bName"

elif [ $# -eq 1 ]; then
  # No -c option provided, commit only
  cMessage="$1"

  # Perform git commands
  git add -A
  git commit -m "$cMessage"
else
  show_usage
  exit 1
fi