/**
 * =========================================================================
 * Portfolio Configuration & Centralized Data
 * Effath Afifah Anika (Effath Anika)
 * Computer Science & Engineering @ Gopalganj Science & Technology University (GSTU)
 * =========================================================================
 * 
 * Update any personal bio, links, projects, or skills directly here!
 */

const portfolioData = {
  personal: {
    name: "Effath Anika",
    fullName: "Effath Afifah Anika",
    title: "Software & Backend Engineering Enthusiast",
    subtitle: "2nd Year CSE Undergrad (Semester 2-1) @ Gopalganj Science & Technology University (GSTU)",
    location: "Bangladesh",
    bio: "Computer Science & Engineering student at GSTU passionate about robust backend architectures, clean object-oriented design, and algorithmic problem solving. Proficient in C, C++, Python, and Java with a deep curiosity for building scalable REST APIs, relational database schemas, and data analysis pipelines. Actively honing analytical and competitive programming skills on Codeforces and Toph.",
    status: "Open to Software & Backend Engineering Internships / Tech Collaborations",
    availability: "Available for Academic Projects, Open-Source & Junior Developer Roles",
    avatar: "assets/profile-avatar.svg"
  },

  rotatingRoles: [
    "Software & Backend Engineer",
    "C++ & Python Developer",
    "Java OOP & State Machine Architect",
    "Competitive Programmer (Codeforces & Toph)",
    "Data Structures & Algorithms Explorer",
    "REST API & Database Modeling Enthusiast",
    "Data Analysis & Computing Explorer"
  ],

  links: {
    email: "effathanika@gmail.com",
    github: "https://github.com/anika35-effath",
    githubUsername: "anika35-effath",
    facebook: "https://www.facebook.com/share/154RdWzAsgG/",
    whatsapp: "https://wa.me/8801344885035",
    whatsappNumber: "+880 1344-885035",
    codeforces: "https://codeforces.com/profile/4caterpillar",
    codeforcesHandle: "4caterpillar",
    toph: "https://toph.co/u/effathanika",
    tophHandle: "effathanika",
    linkedin: "https://linkedin.com/in/effath-anika",
    resume: "#"
  },

  stats: [
    { label: "Core Stack", value: "C++, Python, Java, C" },
    { label: "Engineering Focus", value: "Backend, OOP & APIs" },
    { label: "Competitive Platforms", value: "Codeforces & Toph" },
    { label: "Analytical Toolkit", value: "DSA & Data Analysis" }
  ],

  spokenLanguages: [
    { name: "English", level: "Professional Working Proficiency", desc: "Technical documentation, code specifications, and global collaboration" },
    { name: "Bengali (বাংলা)", level: "Native Proficiency", desc: "Fluent written, verbal, and academic communication" }
  ],

  // Interactive Technical Domains
  domains: {
    dsa: {
      title: "Data Structures & Algorithms (DSA)",
      level: "Intermediate Problem Solver",
      summary: "Systematic problem solving, abstract data types, asymptotic efficiency analysis, and algorithm design.",
      categories: [
        {
          name: "Linear Data Structures",
          items: ["Arrays & Dynamic Vectors", "Singly & Doubly Linked Lists", "Stacks (LIFO) & Queues (FIFO)", "Circular Buffers & Deques"]
        },
        {
          name: "Algorithmic Paradigms",
          items: ["Binary Search & Two Pointers", "Greedy Techniques", "Recursion & Backtracking", "Sorting & Divide-and-Conquer"]
        },
        {
          name: "Mathematical & Number Theory",
          items: ["GCD / Extended Euclidean", "Prime Factorization & Sieve of Eratosthenes", "Modular Arithmetic", "Combinatorics Foundations"]
        }
      ]
    },
    backend: {
      title: "Backend Engineering & Systems Design",
      level: "Foundational & Applied",
      summary: "Designing modular, testable, and efficient server-side logic and application architecture.",
      categories: [
        {
          name: "Architecture & OOP",
          items: ["SOLID Design Principles", "State Pattern & Game Loop Architecture", "Model-View-Controller (MVC) Pattern", "Interface Segregation & Decoupling"]
        },
        {
          name: "API & Web Services",
          items: ["RESTful API Conventions", "HTTP Methods (GET, POST, PUT, DELETE)", "JSON Payload Parsing & Validation", "Error Handling & Status Codes"]
        },
        {
          name: "Database Design",
          items: ["Relational Schema Modeling (ERD)", "Normalization (1NF, 2NF, 3NF)", "SQL Querying, Filtering & Joins", "SQLite & PostgreSQL Basics"]
        }
      ]
    },
    dataAnalysis: {
      title: "Data Analysis & Computational Modeling",
      level: "Applied Python Stack",
      summary: "Extracting insights, parsing tabular datasets, evaluating algorithmic benchmarks, and statistical modeling.",
      categories: [
        {
          name: "Python Data Tools",
          items: ["Pandas (DataFrame manipulation)", "NumPy (Vectorized computations)", "Matplotlib & Seaborn Visualization", "CSV/JSON Data Cleansing"]
        },
        {
          name: "Analytical Techniques",
          items: ["Empirical Runtime Benchmarking", "Descriptive Statistics", "Data Aggregation & Grouping", "Trend & Anomaly Detection"]
        }
      ]
    },
    tools: {
      title: "Developer Tools & Workflow",
      level: "Daily Engineering Toolkit",
      summary: "Modern software craftsmanship, version management, and command-line efficiency.",
      categories: [
        {
          name: "Version Control & Git",
          items: ["Git Branching & Merging", "GitHub Repository Management", "Pull Requests & Issue Tracking", "Clean Commit Discipline"]
        },
        {
          name: "Development Environments",
          items: ["VS Code / JetBrains IDEs", "Linux / Bash CLI Navigation", "Postman API Testing", "GCC / G++ / Clang Toolchains"]
        }
      ]
    }
  },

  // Highlighted Projects
  projects: [
    {
      id: "battleship-engine",
      title: "Battleship Tactical Grid Game Engine",
      subtitle: "Naval Warfare Simulation & Heuristic Attack AI",
      category: "systems",
      tags: ["C++", "Java", "OOP Principles", "State Machine", "Algorithms"],
      description: "A complete object-oriented Battleship naval strategy simulation. Designed with a robust modular grid state machine, multi-ship bounding box collision verification, and an algorithmic heuristic targeting engine that simulates strategic radar scans and probability-based salvo attacks.",
      architecturalHighlights: [
        "Rigorous object-oriented decomposition: Grid, Ship, Fleet, and Player abstract classes.",
        "Zero memory leaks via structured lifecycle memory management and bounds checking.",
        "Deterministic fleet deployment algorithm preventing diagonal overlaps or edge clipping.",
        "Interactive console visualization displaying hidden fog-of-war vs radar feedback."
      ],
      complexity: "O(1) grid coordinate indexing, O(N²) collision check during fleet positioning",
      github: "https://github.com/anika35-effath",
      badge: "Featured System"
    },
    {
      id: "academic-rest-api",
      title: "Academic & University Records REST API",
      subtitle: "Relational Management Backend Service",
      category: "backend",
      tags: ["Python", "REST API", "Database Design", "SQL", "Architecture"],
      description: "A production-styled RESTful backend service engineered for student academic records, course enrollments, and faculty scheduling. Features a normalized relational database schema with referential integrity, parameter validation, and clean JSON endpoints.",
      architecturalHighlights: [
        "3NF normalized database schema preventing data redundancy and update anomalies.",
        "Comprehensive CRUD endpoints adhering strictly to REST specifications and HTTP status standards.",
        "Input sanitization layer defending against malformed queries and injection risks.",
        "Clean separation between API routing, business controllers, and data storage layers."
      ],
      complexity: "O(1) indexed primary key lookups; O(log N) filtered course queries",
      github: "https://github.com/anika35-effath",
      badge: "Backend Service"
    },
    {
      id: "data-analyzer-suite",
      title: "Algorithm Benchmark & Data Analytics Engine",
      subtitle: "Empirical Runtime Analysis & Visualization",
      category: "data",
      tags: ["Python", "Pandas", "Matplotlib", "NumPy", "Data Analysis"],
      description: "A data analysis and computational benchmarking suite that evaluates empirical execution times across various sorting and search algorithms (QuickSort, MergeSort, HeapSort) on diverse dataset distributions (uniform, gaussian, skewed, reverse-sorted).",
      architecturalHighlights: [
        "Automated dataset generation pipeline with synthetic edge cases.",
        "Empirical vs Theoretical asymptotic curve comparisons visualizing O(N log N) scalability.",
        "Statistical outlier filtering using interquartile range (IQR) detection.",
        "Automated generation of publication-grade distribution plots and CSV telemetry reports."
      ],
      complexity: "Statistical aggregation in O(N); vectorized processing with NumPy C-extensions",
      github: "https://github.com/anika35-effath",
      badge: "Data & Systems"
    },
    {
      id: "lru-cache-storage",
      title: "In-Memory Key-Value Store with LRU Cache",
      subtitle: "Low-Latency Data Storage Architecture",
      category: "systems",
      tags: ["C++", "Data Structures", "Hash Indexing", "LRU Eviction"],
      description: "A high-performance in-memory cache and key-value store implementing an amortized O(1) Least Recently Used (LRU) eviction algorithm by harmonizing a doubly linked list with a hash map lookup table.",
      architecturalHighlights: [
        "Composite data structure binding hash indexing with constant-time node relocation.",
        "Configurable capacity limit with instantaneous eviction of stale access nodes.",
        "Safe boundary validation ensuring zero null pointer dereferencing on rapid operations."
      ],
      complexity: "O(1) amortized get, put, and eviction time complexity; O(Capacity) memory",
      github: "https://github.com/anika35-effath",
      badge: "Core DSA"
    }
  ],

  // Problem Solving Platforms
  problemSolving: {
    overview: "Approaching competitive programming and algorithmic puzzles not merely for rating, but to build rock-solid intuitions for computational limits, time-space trade-offs, and boundary invariants.",
    platforms: [
      {
        name: "Codeforces",
        handle: "4caterpillar",
        url: "https://codeforces.com/profile/4caterpillar",
        color: "#fb7185",
        badge: "Active Contestant",
        desc: "Regular participant in Div. 3 / Div. 4 rounds focusing on constructive algorithms, greedy strategies, number theory, and mathematical problem modeling."
      },
      {
        name: "Toph",
        handle: "effathanika",
        url: "https://toph.co/u/effathanika",
        color: "#a855f7",
        badge: "Problem Solver",
        desc: "National competitive programming platform of Bangladesh. Solving standard algorithmic problems, mastering C++ STL containers, and optimizing I/O performance."
      }
    ],
    categories: [
      { name: "Greedy Algorithms & Constructive", rating: "Strong", note: "Optimal substructure, interval scheduling, prefix sums" },
      { name: "Mathematics & Number Theory", rating: "Solid", note: "Modular arithmetic, prime sieves, Euclidean GCD" },
      { name: "Binary Search & Pointers", rating: "Proficient", note: "Search space reduction, monotonic predicates, 2-pointer sliding" },
      { name: "String Manipulation & Vectors", rating: "Solid", note: "Hashing, frequency arrays, custom comparator sorts" },
      { name: "Object-Oriented Design in C++/Java", rating: "Advanced", note: "Encapsulation, inheritance, polymorph dynamic dispatch" }
    ]
  },

  // Education Details
  education: [
    {
      institution: "Gopalganj Science & Technology University (GSTU)",
      location: "Gopalganj, Bangladesh",
      degree: "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
      duration: "2023 – Present (2nd Year, 1st Semester)",
      badge: "Undergraduate",
      details: [
        "Rigorous coursework in Structured Programming (C), Object-Oriented Programming (Java/C++), and Data Structures.",
        "Deep foundation in Discrete Mathematics, Linear Algebra, Vector Analysis, and Calculus.",
        "Active laboratory hands-on training covering software engineering workflows, terminal automation, and collaborative problem solving."
      ]
    }
  ],

  // Interactive Terminal Commands Data
  terminal: {
    welcome: [
      "Effath Anika — Interactive Backend Developer Terminal v2.1.0",
      "Type \x1b[35m'help'\x1b[0m to list available commands or explore endpoints below.",
      "Logged in as: guest@anika-workstation:~$ (Read-Only Privilege)"
    ],
    commands: {
      help: "Available commands: whoami, skills, projects, battleship, cf, toph, data, edu, contact, curl api/anika, clear",
      whoami: "Effath Afifah Anika — 2nd Year CSE Undergrad @ GSTU | Passionate about Software & Backend Engineering, C++, Java, Python, and Data Analysis.",
      skills: "Core: C, C++, Python, Java | Backend: REST APIs, OOP, Database Normalization, SQL | DSA: Binary Search, Greedy, Math, Number Theory | Tools: Git, Linux, Postman",
      battleship: "Battleship Engine: OOP state machine, coordinate matrix validator, collision detector, and heuristic targeting AI built in C++/Java.",
      cf: "Codeforces Handle: 4caterpillar (https://codeforces.com/profile/4caterpillar)",
      toph: "Toph Handle: effathanika (https://toph.co/u/effathanika)",
      data: "Data Analytics Toolkit: Pandas, NumPy, Matplotlib for asymptotic benchmarking, data cleaning, and statistical processing.",
      edu: "Education: B.Sc. in CSE @ Gopalganj Science & Technology University (GSTU) [2nd Year, 1st Semester]",
      contact: "Email: effathanika@gmail.com | WhatsApp: +880 1344-885035 | GitHub: anika35-effath | Facebook: https://www.facebook.com/share/154RdWzAsgG/",
      "curl api/anika": 'HTTP/1.1 200 OK\n{\n  "developer": "Effath Anika",\n  "role": "Software & Backend Engineer",\n  "university": "GSTU CSE",\n  "focus": ["Backend", "OOP", "DSA", "Data Analysis"],\n  "codeforces": "4caterpillar",\n  "toph": "effathanika",\n  "status": "Ready to build robust software!"\n}'
    }
  }
};

// Freeze to avoid unintended runtime mutations
Object.freeze(portfolioData);
