# Graph Report - redemption-collision  (2026-06-20)

## Corpus Check
- 6 files · ~1,939,897 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 70 nodes · 64 edges · 11 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]

## God Nodes (most connected - your core abstractions)
1. `context_window` - 7 edges
2. `cost` - 6 edges
3. `current_usage` - 5 edges
4. `workspace` - 4 edges
5. `model` - 3 edges
6. `rate_limits` - 3 edges
7. `five_hour` - 3 edges
8. `seven_day` - 3 edges
9. `effort` - 2 edges
10. `output_style` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (13): cwd, effort, level, exceeds_200k_tokens, fast_mode, output_style, name, session_id (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (11): context_window, context_window_size, current_usage, remaining_percentage, total_input_tokens, total_output_tokens, used_percentage, cache_creation_input_tokens (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (7): resets_at, used_percentage, rate_limits, five_hour, seven_day, resets_at, used_percentage

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (6): cost, total_api_duration_ms, total_cost_usd, total_duration_ms, total_lines_added, total_lines_removed

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (5): error, retry_count, timestamp, tool_input_preview, tool_name

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (4): backgroundTasks, sessionId, sessionStartTimestamp, timestamp

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (4): backgroundTasks, sessionId, sessionStartTimestamp, timestamp

### Community 7 - "Community 7"
Cohesion: 0.40
Nodes (4): form, nav, toggle, yearEl

### Community 8 - "Community 8"
Cohesion: 0.50
Nodes (4): workspace, added_dirs, current_dir, project_dir

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): buildCommand, framework, outputDirectory

### Community 10 - "Community 10"
Cohesion: 0.67
Nodes (3): model, display_name, id

## Knowledge Gaps
- **53 isolated node(s):** `session_id`, `transcript_path`, `cwd`, `level`, `session_name` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `context_window` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `rate_limits` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `cost` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **What connects `session_id`, `transcript_path`, `cwd` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._