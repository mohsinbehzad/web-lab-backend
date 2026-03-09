const mockProjects = [
  { id: 1, title: "Project 1", description: "Description of project 1" },
  { id: 2, title: "Project 2", description: "Description of project 2" },
];

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const project = { ...req.body, id: mockProjects.length + 1 };
    mockProjects.push(project);
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ error: 'Error creating project' });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    res.status(200).json({ projects: mockProjects });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = mockProjects.find(p => p.id == projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching project' });
  }
};