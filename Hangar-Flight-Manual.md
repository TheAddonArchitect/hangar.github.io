# Hangar Flight Manual

**Field edition | Reviewed October 26, 2026 | Desktop UI displaying 0.7.0**

31 chapters. Actual desktop captures, current controls and conditional source-reviewed workflows. Live simulator and destructive operations were not executed.

[Download PDF](Hangar-Flight-Manual-Complete.pdf)

## Contents

1. [Read this first](#scope)
2. [First-time setup](#start)
3. [Workspace and navigation](#navigation)
4. [Simulator & Folders](#folders)
5. [Library views, search and filters](#library)
6. [Details, enable, disable and detach](#package)
7. [Selections, bulk actions and tags](#bulk)
8. [Import folders, archives and replacements](#imports)
9. [Archived versions and restoration](#versions)
10. [Activation methods and dependencies](#activation)
11. [Airport overlaps and scenery priority](#priorities)
12. [Readiness, orphaned links and rolling cache](#utilities)
13. [SimBrief briefing and flight overview](#planning)
14. [Pre-Flight Scenery Audit](#audit)
15. [PLN export and planning preferences](#export)
16. [Weather and simulator timeline](#weather)
17. [SimConnect setup and live aircraft](#bridge)
18. [Local tracking web dashboard](#webpanel)
19. [Scenery Map, layers and package previews](#map)
20. [Automatic logbook and local ACARS](#logbook)
21. [Flight history, replay and exports](#history)
22. [VA & Pilot Settings](#pilot)
23. [Appearance & App Behavior](#appearance)
24. [Simulator Launch and preflight](#launch)
25. [Diagnostics & Support](#support)
26. [In-app User Guide and PDF actions](#guide)
27. [About, notices and portable updates](#about)
28. [Local data, backups and recovery](#storage)
29. [Troubleshooting by symptom](#troubleshooting)
30. [Keyboard and status reference](#shortcuts)
31. [Coverage and unavailable integrations](#coverage)

<a id="scope"></a>
## 01. Read this first

**Evidence:** UI + SOURCE REVIEW

Hangar is a Windows flight simulation companion for local add-on management, flight preparation, scenery mapping, read-only simulator telemetry and local flight records. This manual documents the installed desktop interface displaying version 0.7.0, cross-checked against the available local source on October 26, 2026.

UI + SOURCE REVIEW means a control or workflow is present in the inspected interface and/or corresponding implementation. SOURCE REVIEW marks conditional behavior examined in code. These labels do not claim end-to-end simulator testing. Older notes can describe screens that have since been removed.

All manual screenshots are actual app captures. No flight records were fabricated to populate the empty logbook. The aircraft bridge was disconnected. Presentation frames and explanatory labels sit outside the captured interface.

| Control or function | Behavior and limits |
| --- | --- |
| Platform | Windows 10/11 x64, Microsoft Edge WebView2 and the runtime files supplied with your portable build. |
| Coverage | Four flight-deck pages, system pages, six Settings groups and source-supported conditional dialogs. |
| Safety | For simulation and entertainment; maps, weather, routes and landing scores are not certified for real-world aviation. |

> **Attention:** Keep independent backups. Close MSFS before changing links, replacing content, restoring versions or deleting a reviewed cache. No destructive operation or live flight was executed in this audit.


<a id="start"></a>
## 02. First-time setup

**Evidence:** UI + SOURCE REVIEW

Extract the entire portable folder into a permanent location. Keep Hangar.exe, native components, loader and any included bridge together. Do not run inside a ZIP or combine runtime files from unrelated builds.

Use the simulator’s real configuration rather than guessed default folders. Steam, Microsoft Store / PC Game Pass and custom installations can store packages on another drive.

### Procedure

1. Open Settings > Simulator & Folders and select the installation platform.
2. Select Detect & Apply Paths. Review UserCfg.opt, InstalledPackagesPath, Community/Community2024 and separate Official locations.
3. Choose a managed library for your own add-ons, separate from Official content and simulator link destinations.
4. Validate All Paths, resolve issues, and Save Changes. Open Library > Rescan Library.
5. Review and enable eligible packages with MSFS closed. Load an OFP, audit scenery and export a PLN for manual simulator import.
6. Set up the optional SimConnect bridge only if you need live tracking or automatic recording.

| Control or function | Behavior and limits |
| --- | --- |
| Network features | SimBrief, airport datasets, map tiles, weather, and configured update/support services need network access. |
| Local functions | Library indexing, preferences, activation and flight records operate on this PC. |
| Archives | A compatible 7-Zip tool is needed where required by your native importer. |


<a id="navigation"></a>
## 03. Workspace and navigation

**Evidence:** UI + SOURCE REVIEW

The main sidebar opens Library, Flight Planning, Scenery Map and Virtual Airline & Logbook. System links open User Guide, Diagnostics & Support, Settings and About. Check for Updates is pinned below the version.

Collapse Sidebar / Expand Sidebar changes available workspace width and persists locally. The Hangar brand returns to Library. The live-state indicator describes telemetry, not path validation.

| Control or function | Behavior and limits |
| --- | --- |
| Summary cards | Total packages, active packages and managed library footprint. These are not license-ownership totals. |
| Managed Library | Managed-content size; drive usage/free space describes the primary library drive when available. |
| Platform indicator | Selected platform and configured package destination, not a simulator connection switch. |
| Connection banner | Disconnected library drive or queued operations. Reconnect/validate before changing paths. |
| Settings search | Filters the six group names; it is not a full-text search of every setting. |
| Feedback | Busy indicators, toasts, blockers and queued results must be read before assuming success. |

![Actual Hangar: Workspace and navigation](Hangar-GitHub-Pages/docs/assets/manual/library.png)

Actual Library and sidebar. Package names and counts belong to the captured installation; they are not a bundled default collection.


<a id="folders"></a>
## 04. Simulator & Folders

**Evidence:** UI + SOURCE REVIEW

Choose the installation platform. Detection probes UserCfg.opt read-only; Detect & Apply Paths copies found locations into the draft. Save Changes makes them active. This workflow does not edit UserCfg.opt.

InstalledPackagesPath is a parent Packages directory, not itself the Community destination. Missing optional siblings can remain blank. Detection does not silently create a guessed simulator tree.

### Procedure

1. Review the selected platform and detected configuration source.
2. Inspect every destination, external drive letter and nested-path conflict.
3. Validate and save; refresh the inventory when locations change.

| Control or function | Behavior and limits |
| --- | --- |
| Primary managed library | Your own packages, outside simulator link destinations and Official content. |
| Additional managed libraries | Add, browse, edit and remove up to 20 extra path entries. Removing an entry is configuration, not source-folder deletion. |
| Community | Shared/legacy add-on destination. |
| Community2024 | Separate optional destination for native 2024 packages. |
| Official 2020 / Official 2024 | Read-only indexing, including local nested OneStore or Steam packages when present. |
| Legacy official folder | Shown for older configurations; clear only after reviewing migration. |
| Flight plans export folder | Local PLN output location. Cloud / EFB push needs a separate connector. |
| Validate All Paths | Checks existing folders, wrong parent/root selections and overlaps. Read-only debounced checks also run while editing. |

> **Attention:** Detach existing managed links before changing their Community destination. Do not assign identical or nested paths to incompatible library, destination and Official roles.


<a id="library"></a>
## 05. Library views, search and filters

**Evidence:** UI + SOURCE REVIEW

Compact Row View presents dense package rows; Card View presents artwork and metadata. View choice persists locally and can follow the default in Appearance. Rescan Library refreshes indexed files changed outside Hangar.

Search matches title, developer, ICAO, tags and notes. Filter by... combines category, developer and status facets. Clear Filters resets the query, facets and selection.

| Control or function | Behavior and limits |
| --- | --- |
| Rows | Selection, name/location, developer, category, version, folder, status, compatibility, size and activation. Scroll horizontally when needed. |
| Cards | Click artwork or a title for Details. Missing artwork uses your saved placeholder. |
| Group | None, Category, Developer or First Tag. Group collapse/expand applies to compact table headings; cards are not promised to regroup. |
| Compatibility | Metadata/inferred labels; Unverified is not a compatibility certification. |
| Empty results | Clear filters, verify saved locations, reconnect drives and rescan. |
| Protected content | Official/Marketplace and offline packages have restricted selection and activation. Streamed-only content may have no local manifest. |


<a id="package"></a>
## 06. Details, enable, disable and detach

**Evidence:** UI + SOURCE REVIEW

Click a package name or image for its details dialog. Review author, category, region, version, footprint, compatibility, state, path and existing tags/notes. Close with the close control or backdrop.

Activation switches and Enable/Disable actions use native validation. Running or uncertain simulator state may queue or block work. A requested toggle is not proof of immediate deployment.

### Procedure

1. Close MSFS and inspect package metadata.
2. Request a state change and read errors, advisories or queued results.
3. Confirm the final Library state after completion/rescan.

| Control or function | Behavior and limits |
| --- | --- |
| Official content | A read-only notice replaces editing controls. |
| Offline/error packages | Resolve drive, path or package errors first. |
| Detach managed link | Available for eligible inactive local content. Detaches Hangar’s destination link and restores source manifest state; it does not delete the source package. |
| Annotations | Existing tags/notes are displayed. The current bulk toolbar exposes Add Tag; the details dialog does not expose a standalone notes editor. |
| Version history | Opens retained replacement archives for an eligible managed package. |

> **Attention:** Disable, detach and source deletion are different actions.


<a id="bulk"></a>
## 07. Selections, bulk actions and tags

**Evidence:** UI + SOURCE REVIEW

Select eligible managed packages with row/card checkboxes. The compact table header selects all visible eligible packages. The bulk toolbar appears when a selection exists.

Bulk Enable and Bulk Disable confirm the request, process packages sequentially and rescan afterward. A later failure stops the batch; earlier successes can remain.

| Control or function | Behavior and limits |
| --- | --- |
| Bulk state changes | Only local, non-Official, eligible selected items requiring the change. Keep MSFS closed; inspect any mid-batch queue/failure. |
| Add Tag | One nonempty tag up to 40 characters; preserves notes. Annotation validation allows up to 30 tags per package. |
| Clear Selection | Clears selected IDs without changing files. |
| Delete (Unavailable) | Permanent bulk deletion is intentionally disabled. |
| Selection scope | Packages selected before a filter changes can remain selected. Review the count. |

> **Attention:** Bulk activation is not an all-or-nothing transaction. Recheck the inventory after partial completion.


<a id="imports"></a>
## 08. Import folders, archives and replacements

**Evidence:** UI + SOURCE REVIEW

Import Add-ons and desktop drag/drop accept eligible folders and ZIP/RAR/7Z archives. Candidates are staged and classified before the managed library changes.

Review staged imports lists archive, package/category, version, size, destination, new/replacement action and blocking issues. Valid entries may be preselected.

### Procedure

1. Stage files and wait for the review.
2. Inspect destinations, selected count, free space, existing versions and blockers.
3. Deselect unwanted candidates. Acknowledge replacements when required; prior versions are archived by that workflow.
4. Choose Import selected packages, or Cancel & discard staging.
5. Read queued results, then confirm the installed package and resulting version.

| Control or function | Behavior and limits |
| --- | --- |
| Extra space | Accounts for selected package and existing-version backup bytes. |
| Unknown free space | Independently check the destination if native free-space measurement is unavailable. |
| Nested archives | Review detected manifest/package roots; do not blindly copy an outer wrapper folder. |
| Browser samples | Disconnected previews can simulate an import; no desktop filesystem validation follows from that. |

> **Attention:** Keep original downloads and independent backups. Protected Official content is not a writable managed-import target.


<a id="versions"></a>
## 09. Archived versions and restoration

**Evidence:** SOURCE REVIEW + CONDITIONAL UI

Open eligible package Details > Version history to inspect retained replacement versions. Availability depends on backup files created by earlier imports.

A restore must pass native validation and may require disabling/detaching active content. Missing backup files or disconnected drives cannot be reconstructed by the UI.

| Control or function | Behavior and limits |
| --- | --- |
| No archive | A fresh package can have no version history. |
| Restore | Review target version and destination before confirming. |
| After restoration | Rescan and inspect metadata, then validate activation. |
| Legacy helpers | Source retains cleanup/undo/history components, but the current navigation does not expose every earlier page. Do not invent a menu path. |

> **Attention:** No rollback, import, undo or destructive cleanup was executed on your library.


<a id="activation"></a>
## 10. Activation methods and dependencies

**Evidence:** UI + SOURCE REVIEW

Settings > Add-on Activation controls link method, import destination and required-library handling. Save edits before testing activation.

Simulator-running protection remains active even though older Protection & Recovery pages were removed. It can queue work until MSFS closes; it does not safely hot-swap scenery.

| Control or function | Behavior and limits |
| --- | --- |
| NTFS Junctions | Recommended for typical local NTFS use; filesystem permissions still apply. |
| Symbolic Links | May need sufficient privilege or already-enabled Developer Mode. Unprivileged creation preference is conditional on this mode. |
| Junctions + Manifest Toggling | Legacy combined method. Detach existing managed links before switching. |
| Direct Copy / directory hardlinks | Not offered as supported directory-link methods. |
| Default import destination | Primary or another configured managed folder. |
| Activate required libraries automatically | Resolves declared/assigned local dependencies. Missing dependencies/cycles can block work; does not download undeclared/cloud libraries. |

![Actual Hangar: Activation methods and dependencies](Hangar-GitHub-Pages/docs/assets/manual/activation.png)

Actual activation mechanics, file-lock safeguard, dependency controls and utility entry points.


<a id="priorities"></a>
## 11. Airport overlaps and scenery priority

**Evidence:** UI + SOURCE REVIEW

Manage Airport Overlaps lists airport codes with multiple indexed packages. Select a preferred managed package or use the global developer ranking. Official packages remain read-only.

The Global Scenery Priority Stack affects Hangar selection within applicable managed activation plans. It does not rewrite MSFS internal VFS precedence. Per-airport choices take precedence.

### Procedure

1. Inspect overlapping packages and confirm the desired managed package.
2. For a broader rule, add and reorder developers.
3. Save the global ranking and review future activation results.

| Control or function | Behavior and limits |
| --- | --- |
| Airport preference | Selection changes are saved by that control, rather than waiting for the Settings footer. |
| Global stack | Add a developer, drag rows or use Move up/Move down, or remove a ranking entry. |
| Save ranking | Global changes remain a draft until Save Changes. |
| Developer choices | Based on indexed local managed authors; unknown publishers may be omitted. |
| No overlaps | Only means no indexed overlap was found; streamed/unindexed content may be absent. |


<a id="utilities"></a>
## 12. Readiness, orphaned links and rolling cache

**Evidence:** UI + SOURCE REVIEW

Activation utilities separate inspection from removal. A review does not delete files. Use maintenance to investigate a specific problem, not as an automatic crash-repair shortcut.

| Control or function | Behavior and limits |
| --- | --- |
| Check local content | Reads local manifests and simulator process state; reports managed availability, Official inventory and unavailable content. No forced live VFS refresh. |
| Scan managed links | Reviews broken links registered by Hangar. Unregistered third-party links are not removal targets. |
| Remove reviewed links | Separate confirmation, with MSFS closed. Source libraries and unrelated folders are not the intended deletion targets. |
| Inspect cache | Examines the default rolling cache when present. Absence does not prove no custom cache exists. |
| Prepare / Confirm cache purge | Reviewed deletion of the default ROLLINGCACHE.CCC file with MSFS closed; the simulator recreates it. |
| Offline readiness | Checks available local packages, not a way to duplicate proprietary streamed content or force cloud assets offline. |

> **Attention:** Removal and cache purge were not executed. Review exact targets and backups; a cache purge is not a live scenery synchronization.


<a id="planning"></a>
## 13. SimBrief briefing and flight overview

**Evidence:** UI + SOURCE REVIEW

In Flight Planning, enter a SimBrief username or numeric Pilot ID and Fetch Latest OFP. Generate a plan in SimBrief first. Hangar requests the latest available operational flight plan and does not request a SimBrief password.

Overview shows flight, endpoints, aircraft, distance, time and route. Summary cards show supplied runways, alternates, cruise level, block/trip fuel and payload. Missing values remain unavailable.

| Control or function | Behavior and limits |
| --- | --- |
| Copy Route | Copies routing text, without loading aircraft avionics. |
| Review Route Scenery | Shows/hides the audit. |
| Enroute Overview | Route phases and fresh aircraft when connected. |
| Waypoint Sequence | Waypoints in flight order, airway/direct legs, actual constraints, planned altitude when no constraint exists, and distance to the next fix. |
| Airport Weather | Reports for origin, destination and available alternates, with source/time/errors. |
| Winds at Cruise | Select altitude; inspect OFP direction, speed, head/tailwind and crosswind. Absent forecast records cannot be synthesized. |
| Persistence | OFP/identifier stored locally; a saved plan is not automatically current. |
| Sample OFP | Marked sample; live weather disabled for sample plans. |

![Actual Hangar: SimBrief briefing and flight overview](Hangar-GitHub-Pages/docs/assets/manual/planning.png)

Actual flight briefing and route map with tracking disconnected. Map data: OpenStreetMap contributors; this is a simulation interface example.


<a id="audit"></a>
## 14. Pre-Flight Scenery Audit

**Evidence:** UI + SOURCE REVIEW

The audit compares the route to locally indexed Community and Official scenery. Summary counts cover route airports, no indexed enhancement, installed/inactive packages and corridor radius.

Adjust Corridor in NM. View on Scenery Map opens the map. Expand Nearby Scenery & Landmarks for usable nearby packages.

| Control or function | Behavior and limits |
| --- | --- |
| Enhanced Scenery | Indexed enhancement available in the audit context; inspect managed versus Official state. |
| Installed / Inactive | Locally available managed package not enabled. Activate still uses runtime safeguards. |
| No Enhancement Indexed | No matching enhancement found in indexed data, not proof that no streamed/unindexed enhancement exists. |
| Official / Read Only | No writable activation control for protected content. |
| Discover | Copies an airport web-search URL; does not download or purchase anything. |
| Warnings | Read coordinate, route and inventory warnings before relying on matches. |

> **Attention:** Change managed scenery with MSFS closed. The audit does not alter simulator VFS precedence or dynamically mount content.


<a id="export"></a>
## 15. PLN export and planning preferences

**Evidence:** UI + SOURCE REVIEW

Settings > Flight Planning currently contains Dispatch & Route, Avionics & Export and Scenery Staging. Older AIRAC comparison controls are not exposed by the reviewed screen.

MSFS 2024 EFB export writes XML v12 PLN; the MSFS 2020 Legacy variant writes XML v10. Save the file, then import it through the simulator/EFB and inspect the resulting route.

### Procedure

1. Choose/save the export variant and folder.
2. Load and inspect an OFP, then invoke export.
3. Complete the save and manually import the PLN into MSFS/EFB.
4. Verify procedures and route in the simulator.

| Control or function | Behavior and limits |
| --- | --- |
| Identifier / corridor | Default SimBrief ID and 0-500 NM preference; the audit applies its own valid corridor bounds. |
| Alternate airports / landmarks | Include usable indexed alternatives/nearby features. |
| Units | OFP/kg/lb fuel; feet/flight levels or metres; NM or km. Specifically labeled source summary fields may retain their own units. |
| Avionics sync method | File export available. Direct G1000/FMS integration and simulator push unavailable without a compatible connector. |
| Export shortcut | Off or Ctrl+Shift+P; loaded plan and Hangar focus required, outside editable controls. |
| Staging | Manual review or required pre-launch audit. Dynamic injection unavailable. |
| Output directory | Configured separately under Simulator & Folders. Native save dialog can be canceled. |

> **Attention:** A saved PLN is not direct FMS injection, an in-game key binding or proof of avionics compatibility.


<a id="weather"></a>
## 16. Weather and simulator timeline

**Evidence:** UI + SOURCE REVIEW

Weather & Tracking selects the external weather source. Flight Planning displays Refresh METAR / TAF, source, fetch time and station errors. Intervals are 2-60 minutes; respect provider limits.

NOAA / Aviation Weather Center provides current METAR/TAF. VATSIM provides current METAR only. No report is not a report of clear conditions.

| Control or function | Behavior and limits |
| --- | --- |
| Refresh on flight-plan load | Fetch after a non-sample plan loads; a periodic timer can update while the planning view is active. |
| Simulator timeline sync | Needs valid simulator calendar UTC (simUtc). Can request nearby available past NOAA METAR within the preceding supported 24-hour window. |
| No valid simUtc | Falls back to current reports with a limitation. Simulator elapsed seconds are not calendar UTC. |
| Historical bounds | Observations are not MSFS internal weather arrays; historical TAF is not presented as a historical forecast. |
| VATSIM | Current-only, regardless of timeline preference. |
| Errors | Check codes, source, fetch time and network availability. |

![Actual Hangar: Weather and simulator timeline](Hangar-GitHub-Pages/docs/assets/manual/weather.png)

Actual Weather & Tracking screen, with disconnected bridge and local panel controls.


<a id="bridge"></a>
## 17. SimConnect setup and live aircraft

**Evidence:** UI + SOURCE REVIEW

Tracking uses a local WebSocket bridge, normally ws://127.0.0.1:8385. Some portable builds omit the optional bridge. Obtain Microsoft runtime/SDK components from authorized sources and follow the supplied build/runtime instructions.

Connect Live Aircraft / Start Bridge requests the connection and may start the bundled executable when supported by the host. Load a supported aircraft in MSFS. A connected socket without usable telemetry is not a live aircraft.

### Procedure

1. Check bridge/runtime availability for your build.
2. Save the local endpoint in Weather & Tracking.
3. Load a simulator flight and request connection.
4. Confirm fresh position and identity where supplied; enable the aircraft map layer.

| Control or function | Behavior and limits |
| --- | --- |
| Disconnected | No active usable aircraft connection. |
| Connecting | Negotiating, awaiting simulator data or awaiting fresh position. |
| Active / Connected | Valid position arrived; individual SimVars still depend on aircraft/bridge. |
| Display frequency | 1, 5 or 10 Hz limits Hangar UI updates, not bridge packet emission. |
| Position timeout | 3-120 seconds; stale coordinates discarded and the icon may disappear. |
| Auto-connect | Requests connection through the relevant view/bridge lifecycle. |
| Disconnect vs Stop | Disconnect closes Hangar’s socket. Stop requests shutdown of a host-controlled bridge; an external process remains independently controlled. |

> **Attention:** Position alone cannot record a complete flight. This audit did not run live MSFS telemetry.


<a id="webpanel"></a>
## 18. Local tracking web dashboard

**Evidence:** UI + SOURCE REVIEW

Broadcast Local Tracking Panel starts a read-only dashboard at http://127.0.0.1:8386/ when implemented by the Windows host. This HTTP panel is separate from the 8385 WebSocket bridge.

The source forwards a limited received position approximately once per second. Save the preference and open the loopback URL on this PC. Disable the setting to stop the host-controlled panel.

| Control or function | Behavior and limits |
| --- | --- |
| Host support | Requires the native setEfbBroadcast capability; an unavailable host can disable the setting. |
| Reachability | Loopback only, not a remote or LAN tablet service. |
| EFB boundary | Does not install an in-cockpit MSFS EFB app. That needs a separately developed/installed SDK package. |
| Audit limit | The local server and network/privacy settings were not enabled or changed during review. |


<a id="map"></a>
## 19. Scenery Map, layers and package previews

**Evidence:** UI + SOURCE REVIEW

Toggle Airport Mod Pins, Photogrammetry / Landmarks, Active Flight Route and Connected Live Aircraft independently. Map Style offers Light Street Map, Dark Night Map and Satellite Imagery. The bottom HUD describes the loaded OFP and supplied live state.

Zoom/pan with supported gestures and controls. Follow Aircraft centers only when valid telemetry exists; a following control alone is not a connected aircraft.

| Control or function | Behavior and limits |
| --- | --- |
| Airport lookup | Known ICAO coordinates may be requested for indexed airports lacking usable position. Unpositioned packages remain in Library. |
| Pin preview | Metadata, author, size, compatibility and state. Eligible Enable/Disable, Open Folder and Details actions still use native safeguards. |
| Co-located packages | A preview can show several packages and summarize additional matches. |
| Route | Reads the local loaded OFP; load a valid plan if absent. |
| Tile errors | Map Tiles Unavailable can leave overlays usable. Retry Map Tiles after checking provider/network access. |
| Attribution | Retain OpenStreetMap and applicable tile/imagery credits. Dark styling/provider can differ by build; satellite imagery has its own source attribution. |

![Actual Hangar: Scenery Map, layers and package previews](Hangar-GitHub-Pages/docs/assets/manual/scenery.png)

Actual scenery pins and saved route with no connected aircraft. Map data: OpenStreetMap contributors; retain tile-provider attribution.

> **Attention:** Maps are incomplete visualizations of indexed coordinates, not certified navigation or a complete Marketplace inventory.


<a id="logbook"></a>
## 20. Automatic logbook and local ACARS

**Evidence:** UI + SOURCE REVIEW

Flight Logbook shows This Month, Lifetime Hours, Distance Flown, Completed Flights, an hours milestone, six-month chart and aircraft breakdown.

Live ACARS Monitor exposes phase, aircraft, tail, recorder state and ground track. Day/night/fuel totals depend on recorded data. Passengers / Cargo currently reads Not Captured.

| Control or function | Behavior and limits |
| --- | --- |
| Block out | Source starts when engines run and parking brake is released, with required ground/brake/engine telemetry present. |
| Takeoff | Airborne after block out. |
| Landing | Airborne-to-ground transition; captures available touchdown FPM, G, pitch and crosswind. |
| Block in | After a landing, on-ground with parking brake engaged and engines stopped. |
| Missing fields | No automatic record is manufactured from position alone. |
| Day/night | Approximate solar classification from valid simulator UTC/location, not a certified pilot log. |
| Fuel | Descriptive start/end fuel difference. Lifetime lb aggregate excludes records not stored in lb. |
| Capacity | Up to 3,000 completed records; active state saved periodically. Export wanted history independently. |

![Actual Hangar: Automatic logbook and local ACARS](Hangar-GitHub-Pages/docs/assets/manual/logbook.png)

Actual empty logbook and disconnected monitor. Statistics remain at their real values; no sample records were inserted.

> **Attention:** Recording logic was source-reviewed; no live flight was completed. Data interruptions or unsupported aircraft variables can limit or prevent a record.


<a id="history"></a>
## 21. Flight history, replay and exports

**Evidence:** SOURCE REVIEW + CONDITIONAL UI

Search history by flight, origin, destination, aircraft or tail. Sort Newest First, Longest Flight or Smoothest Landing. Smoothest currently sorts by absolute landing FPM, not certified quality.

CSV, XLSX and JSON export the currently filtered/sorted records. Clear search before exporting the complete registry.

| Control or function | Behavior and limits |
| --- | --- |
| Details | Existing record: block out, takeoff, landing, block in, touchdown FPM, G, pitch, crosswind and sample count when available. |
| Edit | Flight Number, Departure ICAO and Arrival ICAO normalize to uppercase; Save Flight commits. |
| Replay visuals | Recorded ground track, altitude and true-airspeed profiles require usable samples. No track is invented when data is absent. |
| GPX | Per-flight track export when samples exist; elevation converted from ft to m. Not full aircraft-state replay. |
| Unofficial score | Descriptive 0-100 calculation using available FPM/G/pitch/crosswind; not an airline or simulator-issued rating. |
| Delete | Confirmation removes the local record. Export wanted data first; no recycle-bin restore is promised. |
| JSON | Contains a Hangar flight-log schema; no corresponding UI import control is exposed. |
| Sampling | Approximately every 10 seconds after block out, up to 22,000 route samples. Gaps cannot be reconstructed. |

> **Attention:** No record existed to demonstrate edits, deletion, replay or export output. These conditional workflows were source-reviewed.


<a id="pilot"></a>
## 22. VA & Pilot Settings

**Evidence:** UI + SOURCE REVIEW

Airline, Pilot Callsign, VA Rank and comma-separated Type Ratings save immediately to local storage. This tab does not use Settings > Save Changes.

These are self-entered pilot details, not earned/verified provider ranks or credentials.

| Control or function | Behavior and limits |
| --- | --- |
| Airline / Callsign / Rank | Up to 60 characters each. |
| Type ratings | Up to 180 characters; comma-separated values, e.g. A320, B738. |
| Provider connectivity | No provider connected in the inspected build. Direct dispatch/PIREP requires approved API access and authentication. |
| Manual submission | Export completed flight records and use your airline’s accepted workflow; no universal automatic PIREP integration is implied. |

![Actual Hangar: VA & Pilot Settings](Hangar-GitHub-Pages/docs/assets/manual/pilot.png)

Actual VA/Pilot fields with blank local details and no connected provider. Placeholders are not an authenticated airline account.


<a id="appearance"></a>
## 23. Appearance & App Behavior

**Evidence:** UI + SOURCE REVIEW

Choose appearance and behavior in Settings. Preview surfaces show draft choices; save to apply global preferences. Cancel abandons edits. An unsaved-group switch offers Continue Editing or Discard Changes.

Restore Defaults creates a reset draft; inspect and save it. It retains managed library paths and is not a complete application-data erasure.

| Control or function | Behavior and limits |
| --- | --- |
| Theme | Follow System, Light, Dark or Aviation Night / True Black. |
| Accent | Standard Blue, Boeing Brown, Airbus Cyan, Garmin Teal, Night Operations Red or custom. The red preset also chooses aviation theme in the reviewed source. |
| Scale | 80, 90, 100, 110, 125 or 150 percent. |
| Row spacing | Compact, Comfortable or Spacious. |
| Default library view | Detailed List Table or Visual Card Grid. |
| Window behavior | Minimize to System Tray, Always on Top and Hide Top Title Bar, subject to host support. |
| Hardware acceleration | GPU rendering preference; restart to apply. Needs compatible rebuilt native host. |
| Start with Windows | Desktop startup registration. Keep portable installation at a stable location. |
| Notifications | All activity, warnings/errors only or none. |
| Thumbnail radius | 0-12 px. |
| Image quality | High, Balanced optimized WebP or Performance compressed WebP preference. |
| Placeholder | Airplane silhouette, regional map, text label or minimal icon for missing/failed artwork. |

![Actual Hangar: Appearance & App Behavior](Hangar-GitHub-Pages/docs/assets/manual/appearance.png)

Actual Appearance screen. Thumbnail and reset controls continue below the screenshot viewport and are included in the reference table.


<a id="launch"></a>
## 24. Simulator Launch and preflight

**Evidence:** UI + SOURCE REVIEW

Choose Steam, Microsoft Store / PC Game Pass or a custom executable. Steam uses its configured app ID; Store uses packaged-app activation; custom requires an absolute executable path.

Run preflight checks dependencies, airport overlap, managed links, simulator/library paths and process state. Resolve blockers and rerun. Settings can summarize the first findings; conditional review dialogs can offer detailed checks and eligible launch.

| Control or function | Behavior and limits |
| --- | --- |
| FastLaunch | Optional Bypass Intro Videos preset. Simulator support is installation-dependent. |
| VR reminder | A reminder to use the in-game binding, not automatic VR injection. |
| Preflight before launch | Blocks an eligible request when errors remain. |
| Minimize after launch | After successful request; not proof MSFS loaded correctly. |
| Safe Mode recovery | Expandable official-recovery/isolation guidance, not a force-Safe-Mode switch. |
| Advanced arguments | One argument per line, no JSON. Use documented parameters; unsupported arguments are not simulator-validated. |
| Launch preview | Method and selected arguments including FastLaunch. |
| Pre-launch scenery staging | Can require OFP/audit. Queued file changes are not a safe signal to start the simulator. |

![Actual Hangar: Simulator Launch and preflight](Hangar-GitHub-Pages/docs/assets/manual/launch.png)

Actual launch configuration and preflight controls. No simulator launch or preference change was performed.

> **Attention:** The current ordinary navigation can expose configuration/preflight without a general Launch Now button. Use only actions offered by your build; launch MSFS normally if no eligible launch action appears.


<a id="support"></a>
## 25. Diagnostics & Support

**Evidence:** UI + SOURCE REVIEW

System Health Check detects configuration and validates paths. Refresh updates the report. Source also refreshes approximately every minute while focused and on focus return. Its Connected label refers to configuration/path health, not SimConnect.

Path copy buttons copy the scan path, packages root or UserCfg.opt location. Simulator Paths opens folder settings. Read checked time and warnings.

| Control or function | Behavior and limits |
| --- | --- |
| Export Diagnostics | Native TXT save workflow with status, path checks and errors. Not an automatic upload or every local log file. |
| Common Fixes & FAQ | Empty Community, update crashes, external SSD, symlink failures and update lookup. |
| Issue Category | Path Detection, Symlink Error, UI Glitch, Performance, Import / Library, Flight Planning or Other. |
| Reply-to Email | Optional; local entry does not itself send a report. |
| Steps to Reproduce | Required for copy/submission; source limit 5,000 characters. |
| Expected vs Actual | Source limit 3,000 characters. |
| Diagnostic snapshot | Opt-in path/validation data. Inspect before sharing. |
| Attachments | ZIP/TXT/LOG/JSON/PNG/JPG/JPEG/WebP, maximum 10 MB in the source. Choosing a file does not upload it. |
| Copy Report Content | Structured clipboard report and read-only preview. |
| Open Email App | Only if a publisher mailbox exists. Paste report and attach chosen files manually. |
| Submit Report | Only if a publisher HTTPS form endpoint is configured. Explicit click transmits report, attachment and opted-in diagnostics; failure preserves the report. |

> **Attention:** The inspected build can use Manual Copy mode. Do not promise ticketing where no service is configured. Paths may disclose personal locations; no report was sent.


<a id="guide"></a>
## 26. In-app User Guide and PDF actions

**Evidence:** UI + SOURCE REVIEW

User Guide offers search, expandable sections and per-step checkpoints. Search expands matching content; clearing returns normal section selection. Progress persists locally and describes your marks, not automated validation.

Open PDF Guide opens the build’s bundled PDF. Save PDF to Downloads uses the native save workflow where available, otherwise a browser download.

| Control or function | Behavior and limits |
| --- | --- |
| Progress | Completed/total checkpoints and matching section count. |
| Badges | Upcoming, active or clear are checklist progress states. |
| Context action | Open in Hangar Settings can navigate to related groups or other workspaces; its displayed label can be generic. |
| Website edition | Expanded chapter navigation, search, actual full-size captures, print styling and matching PDF. |
| Installed-app boundary | Updating website files does not replace an executable’s embedded guide. Integrate the source/PDF and rebuild the app to update its bundle. |

![Actual Hangar: In-app User Guide and PDF actions](Hangar-GitHub-Pages/docs/assets/manual/guide.png)

Actual installed User Guide. Its older bundled checkpoint list is not an automated feature test or the updated website manual.


<a id="about"></a>
## 27. About, notices and portable updates

**Evidence:** UI + SOURCE REVIEW

About displays actual version, build, platform, native scan-engine availability and portable distribution. A local build label is not a public release identifier.

Expandable Terms, Privacy, Open Source Credits and Changelog display the publisher-supplied text. Their presence is not certification; draft text remains draft. Unconfigured project/community links appear as Coming Soon.

| Control or function | Behavior and limits |
| --- | --- |
| Check for Updates | Sidebar/About; needs a configured trusted HTTPS release manifest/feed. |
| Not checked / unavailable | Does not establish that the installed build is latest. |
| Available release | Supplied version/build, notes/checksum, Open Release and Copy Release URL where provided. |
| Portable replacement | Download from trusted publisher, verify supplied SHA-256, close Hangar and follow release instructions. No automatic installer is promised. |
| Community links | Repository, homepage, Discord, developer support and general service links depend on publisher configuration. |

![Actual Hangar: About, notices and portable updates](Hangar-GitHub-Pages/docs/assets/manual/about.png)

Actual About page. Version, local build, native scanner and unconfigured publisher links remain visible; update status was not checked.


<a id="storage"></a>
## 28. Local data, backups and recovery

**Evidence:** UI + SOURCE REVIEW

Settings, managed-link records, annotations, UI state, fetched OFPs and flight logs can span app files and webview local storage. Portable does not mean every record is beside the EXE. Host/migration and an explicit HANGAR_DATA_DIR can change app data location.

Export wanted records and retain independent configuration/package backups. Filter changes, window closure, package disable and deleting source content are different actions. Webview-storage clearing can erase local pilot/logbook data.

| Control or function | Behavior and limits |
| --- | --- |
| Logbook keys | hangar-flight-logbook-v1 and hangar-active-flight-v1. Do not edit them while running. |
| Pilot key | hangar-va-pilot; no cloud backup/account implied. |
| OFP / ID | Persist locally; review before sharing an installation or diagnostics. |
| Replacement archives | Restoration depends on retained backup files and accessible drives. |
| Disconnected drive | Reconnect its expected letter, validate and rescan; do not create empty substitute roots. |
| Library entry removal | Configuration change, not guaranteed automatic detachment of every existing link. |
| Network boundaries | Maps, weather, SimBrief and configured update/support requests have provider/network metadata. Local processing does not mean zero external requests. |

> **Attention:** No blanket Reset All Data or logbook import is documented: current UI exposes neither. Preference reset retains library locations.


<a id="troubleshooting"></a>
## 29. Troubleshooting by symptom

**Evidence:** UI + SOURCE REVIEW

Start with a small read-only check. Record build, exact action, expected/actual result and error. Change one variable at a time.

| Control or function | Behavior and limits |
| --- | --- |
| No packages | Save correct platform/paths, reconnect drives, validate, rescan and clear filters. Check local Official manifests. |
| Invalid VFS root | Select real Community siblings, not the parent Packages path; review overlaps. |
| Activation failure | Close MSFS; check availability, permissions, mode, dependencies and queued work. |
| Import blocked | Read staging issues, destination, replacement acknowledgment, disk space and extractor status. |
| Missing art | Artwork may be absent/invalid; select a placeholder rather than replacing package files. |
| Blank map | Check provider/network and Retry Map Tiles. Overlays may still work. |
| Tracking waiting | Check local endpoint, runtime, loaded flight and fresh telemetry. Socket-open is not position data. |
| No log entry | Required ground/brake/engine states and full block-out-to-block-in sequence; no guessed fields. |
| No replay/GPX | Needs usable recorded samples; old gaps cannot be fabricated. |
| Missing weather | Station/source/network/fetch time. VATSIM no TAF/history; NOAA historical mode needs usable simUtc. |
| Appearance unchanged | Save; restart for GPU. Native behavior requires matching host. |
| Updates unavailable | Publisher/feed may be unconfigured; not proof of currency. |
| Attachment not sent | Manual Copy needs manual attachment; only explicit configured Submit sends files. |


<a id="shortcuts"></a>
## 30. Keyboard and status reference

**Evidence:** UI + SOURCE REVIEW

Settings shortcuts are desktop/Hangar-local and avoid editable fields. They do not bind global simulator keys. Mouse controls remain available.

| Control or function | Behavior and limits |
| --- | --- |
| Ctrl+1 | Appearance & App Behavior. |
| Ctrl+2 | Simulator & Folders. |
| Ctrl+3 | Add-on Activation. |
| Ctrl+4 | Flight Planning settings. |
| Ctrl+5 | Weather & Tracking. |
| Ctrl+6 | Simulator Launch, regardless of sidebar position. |
| Ctrl+Shift+P | Configured export shortcut with loaded plan and Hangar focus, outside editable controls. |
| Clipboard actions | Route, paths, discovery URL and report copy do not themselves submit data. |
| Blocker | Resolve before proceeding. |
| Advisory / Unverified | Read the condition; neither blanket failure nor proof of safety. |
| Queued | Deferred request; verify after simulator closes. |
| Offline / Connecting / Active | Usable current telemetry, not merely configured simulator folders. |


<a id="coverage"></a>
## 31. Coverage and unavailable integrations

**Evidence:** UI + SOURCE REVIEW

This manual covers current flight-deck/system pages, six Settings groups and source-backed conditional workflows. A retained source file is not automatically a visible current feature.

Profiles, Marketplace Content, Virtual Folders, Career Dashboard and older standalone Maintenance/Operation History navigation are absent from the inspected main menu. Compatibility routines and stored keys can remain without those pages.

| Control or function | Behavior and limits |
| --- | --- |
| Local inventory | Scans local package manifests; not a complete streamed Marketplace inventory. |
| Route/avionics | PLN export is real; native EFB/FMS injection and career dispatch extraction need separate connectors. |
| Telemetry/ACARS | Read-only local bridge and recorder logic present; no live simulator certification in this audit. |
| VA | Local pilot/logbook tools and exports; no provider-verified rank, account sign-in or automatic PIREP connection. |
| Maintenance | Only current reviewable entry points described; no undocumented VFS purge or cloud-content downloader. |
| Build parity | Newer source can describe controls absent from an older host. Check actual enabled controls and build. |
| Review limits | No active link change, import/replacement, cache purge, record deletion, support submission, simulator launch or completed live flight was performed. |

> **Attention:** Comprehensive for this reviewed baseline, not a promise of identical future builds. Report mismatches with exact build and control label.
