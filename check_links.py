#!/usr/bin/env python3
import os
import re

patterns = [
    r']\(/product-management/',
    r']\(/philosophy-psychology/',
    r']\(/writing-and-inspiration/',
    r']\(/ai-learning/'
]

found_issues = []

for root, dirs, files in os.walk('content'):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    for i, line in enumerate(content.split('\n'), 1):
                        for pattern in patterns:
                            if re.search(pattern, line):
                                found_issues.append(f'{filepath}:{i}:{line.strip()}')
            except Exception as e:
                print(f'Error reading {filepath}: {e}')

if found_issues:
    print(f'Found {len(found_issues)} broken links:\n')
    for issue in found_issues:
        print(issue)
else:
    print('✅ No broken links found!')

