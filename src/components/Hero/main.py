import subprocess
import os
import random
from datetime import datetime, timedelta

GITHUB_USER_NAME = "janeeshgithub"
GITHUB_USER_EMAIL = "janeeshthelegend@gmail.com"
file_path = './data.json'

def run_git_command(command, env=None):
    result = subprocess.run(command, env=env, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error running command: {' '.join(command)}")
        print(result.stderr)
    else:
        print(result.stdout)

# Set git user configuration
run_git_command(['git', 'config', 'user.name', GITHUB_USER_NAME])
run_git_command(['git', 'config', 'user.email', GITHUB_USER_EMAIL])

# Get today's date
today = datetime.now()

# Loop through the given range and commit for random dates
commit_range = range(100,300)
random_days = random.sample(commit_range, len(commit_range))

for i in random_days:
    # Calculate the date for the commit
    commit_date = today - timedelta(days=i)
    formatted_date = commit_date.strftime('%Y-%m-%dT%H:%M:%S')

    # Data to write to the file
    data = {
        "date": formatted_date
    }

    # Write data to the file
    with open(file_path, 'w') as f:
        import json
        json.dump(data, f, indent=4)

    # Set environment variables for commit date
    env = os.environ.copy()
    env['GIT_COMMITTER_DATE'] = formatted_date
    env['GIT_AUTHOR_DATE'] = formatted_date

    # Debug information
    print(f"Committing for date: {formatted_date}")

    # Run git commands
    run_git_command(['git', 'add', file_path], env)
    run_git_command(['git', 'commit', '-m', f'Commit on {formatted_date}', '--date', formatted_date], env)

# Finally, push all commits to the remote repository
run_git_command(['git', 'push', 'origin', 'main'], os.environ)  # Adjust branch name if necessary

print("All commits created and pushed successfully.")
