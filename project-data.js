window.PROJECTS = [
  {
    "id": "carbondale",
    "org": "Southern Illinois University Carbondale",
    "role": "Graduate Research Assistant",
    "date": "August 2025 — Present",
    "category": "FLOOD RISK & MITIGATION",
    "title": "Where does the water go—and which interventions help?",
    "summary": "For Carbondale’s city-funded stormwater planning work, I developed citywide models to understand flood inundation, identify vulnerable corridors, and evaluate detention and low-impact development alternatives before construction decisions are made.",
    "tags": [
      "HEC-RAS 2D",
      "PCSWMM",
      "Python",
      "LiDAR",
      "NLCD / SSURGO / MRMS"
    ],
    "highlight": "<strong>92 mi² model domain · 18 design-storm scenarios · 5 LID practices evaluated</strong>",
    "problem": "A city needs more than a single flood map. Storm duration, the distribution of runoff, and the location of mitigation measures all affect where flooding occurs. The planning task is to connect those patterns to infrastructure exposure and alternatives for capital investment.",
    "contribution": "I developed a HEC-RAS 2D rain-on-grid model and a citywide PCSWMM model, supported by Python workflows. My work connects terrain, land cover, soils, and rainfall data with scenario analysis and mitigation comparison.",
    "details": [
      "Used LiDAR, NLCD, SSURGO, and MRMS data in the citywide modeling workflow. These datasets represent terrain, land cover, soils, and precipitation information, respectively.",
      "Executed 18 Bulletin 75 design-storm scenarios to assess critical durations, level of service, and flood-prone corridors.",
      "Evaluated detention alternatives and five low-impact development practices through PCSWMM and Python-based analysis of peak-flow and runoff-volume reductions.",
      "Ranked mitigation alternatives to support city capital planning."
    ],
    "decision": "The analysis supports identifying where infrastructure is exposed, which storm durations matter, and how mitigation alternatives compare. Peak-flow reduction and runoff-volume reduction provide complementary measures: one concerns the maximum discharge, while the other concerns the total runoff.",
    "steps": [
      [
        "Assemble",
        "Prepare terrain, land cover, soils, and rainfall inputs."
      ],
      [
        "Simulate",
        "Run citywide inundation and design-storm scenarios."
      ],
      [
        "Compare",
        "Evaluate detention and LID alternatives."
      ],
      [
        "Prioritize",
        "Translate modeled performance into planning comparisons."
      ]
    ],
    "scope": "Ongoing graduate research. The scope and scenario counts are documented in my résumé; final reduction percentages and adopted capital projects are not reported here."
  },
  {
    "id": "bridgewatch",
    "org": "Hanson Professional Services",
    "role": "Water Resources Intern",
    "date": "May — August 2026",
    "category": "FLOOD MONITORING & DATA",
    "title": "Assessing flood-monitoring coverage for 650+ bridges.",
    "summary": "I developed a Python–ArcGIS Pro analysis pipeline for IDOT’s BridgeWatch early-warning system, reviewing how critical Illinois bridges connect to suitable USGS streamgages or NEXRAD precipitation products and translating the findings into action recommendations.",
    "tags": [
      "Python",
      "ArcGIS Pro",
      "BridgeWatch",
      "USGS streamgages",
      "NEXRAD"
    ],
    "highlight": "<strong>650+ critical bridges</strong> reviewed for monitoring connections across Illinois.",
    "problem": "A bridge’s monitoring connection needs engineering review: proximity alone does not establish that a streamgage is suitable. Streamgage observations and radar precipitation also represent different physical quantities and need different interpretation within an early-warning workflow.",
    "contribution": "I performed the bridge-to-monitoring-source analysis, built a repeatable Python and ArcGIS Pro pipeline, and provided recommendations. I also created an inspection form for engineers to collect field observations supporting calibration of early-warning performance.",
    "details": [
      "Reviewed existing bridge connections and assessed suitable nearby USGS gage or precipitation-product coverage.",
      "Used Python with ArcGIS Pro to organize and analyze the bridge-monitoring relationships at statewide scale.",
      "Converted the analysis into recommendations for monitoring connections and follow-up review.",
      "Designed an inspection form to support engineers’ field assessment and calibration work."
    ],
    "decision": "The deliverable connects a large inventory to specific monitoring and field-review actions. USGS streamgages measure conditions at a stream location; NEXRAD is ground-based weather radar that provides precipitation estimates. These sources inform monitoring differently and should not be described as interchangeable measurements.",
    "steps": [
      [
        "Inventory",
        "Organize bridge and monitoring-source records."
      ],
      [
        "Analyze",
        "Review spatial relationships and source suitability."
      ],
      [
        "Recommend",
        "Identify monitoring and follow-up actions."
      ],
      [
        "Verify",
        "Support field feedback through an inspection form."
      ]
    ],
    "scope": "My role covered analysis, recommendations, and the inspection form. A measured improvement in alert accuracy or warning lead time is not claimed."
  },
  {
    "id": "culverts",
    "org": "Hanson Professional Services",
    "role": "Water Resources Intern",
    "date": "May — August 2026",
    "category": "HYDROLOGY & DRAINAGE DESIGN",
    "title": "Connecting watershed characteristics to culvert sizing.",
    "summary": "I used ArcGIS Pro and HydroCAD to support culvert design across Illinois, preparing watershed inputs and assessing alternative culvert sizes for overtopping. I also used advanced Excel and Bentley OpenRoads to assist engineers with interstate drainage design.",
    "tags": [
      "ArcGIS Pro",
      "HydroCAD",
      "Advanced Excel",
      "Bentley OpenRoads"
    ],
    "highlight": "<strong>From basin inputs to crossing performance:</strong> watershed delineation, curve numbers, geometry, and culvert alternatives.",
    "problem": "A culvert assessment depends on both the runoff reaching the crossing and the structure’s ability to convey it. Consistent watershed data is therefore a foundation for evaluating drainage capacity and overtopping.",
    "contribution": "I created and refined GIS inputs, including land-cover assignments, curve numbers, and basin geometric parameters. I applied these inputs in HydroCAD to support sizing and comparison of culvert alternatives.",
    "details": [
      "Delineated watersheds and classified land cover in ArcGIS Pro.",
      "Generated curve numbers and extracted basin geometry for hydrologic analysis.",
      "Used HydroCAD to assess culvert sizes and overtopping behavior.",
      "Supported engineering design and sizing with advanced Excel and Bentley OpenRoads."
    ],
    "decision": "The workflow links a mapped catchment to the hydrologic inputs used in design and then to crossing performance. Keeping those stages connected makes it easier to trace how basin assumptions influence the evaluated culvert alternatives.",
    "steps": [
      [
        "Delineate",
        "Define the contributing watershed."
      ],
      [
        "Characterize",
        "Develop land-cover, curve-number, and basin inputs."
      ],
      [
        "Evaluate",
        "Compare culvert sizes in HydroCAD."
      ],
      [
        "Support design",
        "Carry analysis into engineering calculations and design support."
      ]
    ],
    "scope": "Performed as part of a consulting engineering team. Final structure dimensions, design frequencies, and construction outcomes are not disclosed in this case study."
  },
  {
    "id": "srh2d",
    "org": "Hanson Professional Services",
    "role": "Water Resources Intern",
    "date": "May — August 2026",
    "category": "TWO-DIMENSIONAL HYDRAULICS",
    "title": "Representing a critical interstate crossing in two dimensions.",
    "summary": "I developed an SRH-2D hydraulic model with HY-8 culvert structures for a critical interstate crossing, working from terrain and GIS preparation through mesh generation, boundary-condition setup, and flow analysis.",
    "tags": [
      "SRH-2D",
      "HY-8",
      "ArcGIS Pro",
      "Mesh generation",
      "Breaklines"
    ],
    "highlight": "<strong>A connected model-development workflow:</strong> terrain → materials and breaklines → mesh → boundary conditions → flow analysis.",
    "problem": "A detailed crossing study needs a spatial representation of the terrain and flow paths around the highway as well as the hydraulic behavior of the crossing structures. The model must bring those elements together in a usable computational mesh.",
    "contribution": "I processed terrain, categorized land cover and model materials, developed breakline arcs in ArcGIS Pro, generated the mesh, set up boundary conditions, and performed two-dimensional flow analysis in SRH-2D.",
    "details": [
      "Prepared terrain and GIS layers for hydraulic model development.",
      "Developed land-cover/material classifications and breaklines to support the model geometry.",
      "Generated the computational mesh and configured model boundary conditions.",
      "Represented culvert structures with HY-8 within the modeling workflow and analyzed 2D flow behavior."
    ],
    "decision": "Two-dimensional analysis supports examination of spatial flow patterns around the crossing. Terrain, breaklines, material classification, mesh representation, and boundary conditions all influence how the modeled flow field should be interpreted.",
    "steps": [
      [
        "Prepare",
        "Process terrain and classify model materials."
      ],
      [
        "Structure",
        "Develop breaklines and a computational mesh."
      ],
      [
        "Configure",
        "Set up boundaries and culvert structures."
      ],
      [
        "Analyze",
        "Evaluate the resulting two-dimensional flow field."
      ]
    ],
    "scope": "Site-specific geometry, discharge values, mesh resolution, and design results are not presented here. No calibration or final design approval is implied."
  },
  {
    "id": "dam-removal",
    "org": "Hanson Professional Services",
    "role": "Water Resources Intern",
    "date": "May — August 2026",
    "category": "RIVER HYDRAULICS",
    "title": "Estimating sediment volume for dam-removal planning.",
    "summary": "I developed a one-dimensional HEC-RAS model for a dam-removal project to evaluate hydraulic conditions and estimate accumulated sediment volume for engineering design and planning.",
    "tags": [
      "HEC-RAS 1D",
      "Hydraulic analysis",
      "Sediment-volume estimation"
    ],
    "highlight": "<strong>Planning support</strong> through hydraulic analysis and an estimate of accumulated sediment.",
    "problem": "Dam-removal planning needs information about existing hydraulic conditions and the sediment accumulated within the project area. A volume estimate provides one input to the broader engineering assessment.",
    "contribution": "I performed 1D HEC-RAS modeling and sediment-volume estimation to support the project team’s design and planning work.",
    "details": [
      "Developed the one-dimensional hydraulic model.",
      "Evaluated hydraulic conditions relevant to the dam-removal project.",
      "Estimated accumulated sediment volume for planning and design support."
    ],
    "decision": "The work supports understanding the existing hydraulic setting and the quantity of accumulated material. A sediment-volume estimate does not, by itself, predict sediment transport or downstream morphological change after removal.",
    "steps": [
      [
        "Represent",
        "Develop the one-dimensional model."
      ],
      [
        "Evaluate",
        "Review hydraulic conditions."
      ],
      [
        "Estimate",
        "Quantify accumulated sediment volume."
      ],
      [
        "Inform",
        "Support design and planning discussions."
      ]
    ],
    "scope": "The project description establishes hydraulic modeling and volume estimation; it does not establish mobile-bed simulation, sediment chemistry testing, or post-removal prediction."
  },
  {
    "id": "melamchi",
    "org": "Tundi Constructions",
    "role": "GIS Expert",
    "date": "May 2024 — July 2025",
    "category": "WATER INFRASTRUCTURE & GIS",
    "title": "A reliable spatial record for Kathmandu’s water infrastructure.",
    "summary": "As GIS Expert on the Melamchi Water Supply Project, I reviewed and updated datasets for more than 125 miles of water-distribution pipelines, connecting asset records, field verification, and engineering recommendations.",
    "tags": [
      "ArcGIS Pro",
      "Asset inventory",
      "DGPS surveys",
      "Spatial quality control",
      "Field-team training"
    ],
    "highlight": "<strong>125+ miles of pipeline network</strong> covered by GIS data management and asset-record review.",
    "problem": "A national-scale water-supply initiative depends on reliable records of where assets are located and how they are represented. Inconsistent spatial data makes operational review and infrastructure planning harder.",
    "contribution": "I led GIS data management, reviewed and updated pipeline datasets, maintained asset-record and spatial integrity, produced engineering maps and recommendations, coordinated DGPS verification surveys, and trained field teams.",
    "details": [
      "Reviewed and maintained geospatial records for the water-distribution pipeline network.",
      "Produced data-driven reports and maps supporting operational review and cost-effective infrastructure upgrades.",
      "Planned and executed DGPS-based surveys to verify asset locations in the field.",
      "Led hands-on training in geospatial data collection and quality control for survey teams."
    ],
    "decision": "This work connected office-based GIS review with field verification so the infrastructure inventory could better support operations and upgrade planning. Training field teams also supported consistent data collection beyond an individual mapping task.",
    "steps": [
      [
        "Review",
        "Check pipeline datasets and asset records."
      ],
      [
        "Verify",
        "Coordinate DGPS field surveys."
      ],
      [
        "Update",
        "Refine the geospatial inventory."
      ],
      [
        "Transfer",
        "Document recommendations and train field teams."
      ]
    ],
    "scope": "The documented scope is the distribution-network GIS work. Financial savings, leakage reductions, and improvements in system-wide water delivery are not quantified here."
  },
  {
    "id": "asce",
    "org": "SIUC & SIUE · ASCE",
    "role": "Communications Lead",
    "date": "August 2025 — April 2026",
    "category": "LEADERSHIP & COORDINATION",
    "title": "One communication point. Seventeen universities.",
    "summary": "I served as communications lead for the three-day 2026 ASCE Mid-America Student Symposium, co-hosted by SIUC and SIUE, coordinating information and event logistics across students, judges, volunteers, faculty, and officials.",
    "tags": [
      "Stakeholder communication",
      "Technical documentation",
      "Scheduling",
      "Volunteer coordination"
    ],
    "highlight": "<strong>500+ students · 35+ PE judges · 17 universities · 3 days</strong>",
    "problem": "A multi-university engineering symposium requires competition information, schedules, judges, volunteers, and venues to stay coordinated. Clear communication is an operational responsibility as much as a writing task.",
    "contribution": "I acted as the central communication point and managed event documentation and information, judge coordination, scheduling, venue coordination, and volunteer assignments.",
    "details": [
      "Drafted ASCE mailers, website content, and local-competition rules and rubrics.",
      "Recruited and coordinated judges across society-wide, regional, and local competitions, including training and accommodation.",
      "Coordinated competition schedules, the project timeline, venues, and volunteer assignments.",
      "Prepared banners and posters and connected students, judges, faculty, staff, and event officials through a shared communication point."
    ],
    "decision": "The role demonstrates my ability to translate complex requirements into clear documents, coordinate parallel responsibilities, and keep technical and nontechnical stakeholders informed.",
    "steps": [
      [
        "Document",
        "Prepare event information and competition materials."
      ],
      [
        "Coordinate",
        "Align judges, venues, and schedules."
      ],
      [
        "Organize",
        "Assign volunteers and support event logistics."
      ],
      [
        "Communicate",
        "Maintain a central point of contact across stakeholders."
      ]
    ],
    "scope": "The attendance and coordination counts describe event scale, not an independently measured satisfaction or performance score."
  }
];
