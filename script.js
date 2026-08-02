// Basic Info Inputs
const nameInput = document.getElementById('nameInput');
const titleInput = document.getElementById('titleInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const githubInput = document.getElementById('githubInput');
const linkedinInput = document.getElementById('linkedinInput');
const summaryInput = document.getElementById('summaryInput');
const skillsInput = document.getElementById('skillsInput');

// Display Selectors
const displayName = document.getElementById('displayName');
const displayTitle = document.getElementById('displayTitle');
const displayEmail = document.getElementById('displayEmail');
const displayPhone = document.getElementById('displayPhone');
const displayGithub = document.getElementById('displayGithub');
const displayLinkedin = document.getElementById('displayLinkedin');
const displaySummary = document.getElementById('displaySummary');
const displaySkills = document.getElementById('displaySkills');

function bindInputToDisplay(input, displayElement, fallbackText) {
  if (!input || !displayElement) return;
  input.addEventListener('input', () => {
    displayElement.textContent = input.value.trim() || fallbackText;
  });
}

bindInputToDisplay(nameInput, displayName, 'Your Name');
bindInputToDisplay(titleInput, displayTitle, 'Professional Title');
bindInputToDisplay(emailInput, displayEmail, 'email@example.com');
bindInputToDisplay(phoneInput, displayPhone, '+00 000 0000000');
bindInputToDisplay(githubInput, displayGithub, 'github.com/username');
bindInputToDisplay(linkedinInput, displayLinkedin, 'linkedin.com/in/username');
bindInputToDisplay(summaryInput, displaySummary, 'Your professional summary will appear here...');

if (skillsInput && displaySkills) {
  skillsInput.addEventListener('input', () => {
    const skillsArray = skillsInput.value.split(',').filter(skill => skill.trim() !== '');
    displaySkills.innerHTML = '';
    
    if (skillsArray.length === 0) {
      displaySkills.innerHTML = '<li>HTML5</li><li>CSS3</li><li>JavaScript</li>';
      return;
    }

    skillsArray.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      displaySkills.appendChild(li);
    });
  });
}
// DYNAMIC EDUCATION ENTRIES
const eduInputsContainer = document.getElementById('educationInputsContainer');
const eduPreviewContainer = document.getElementById('educationPreviewContainer');
const addEduBtn = document.getElementById('addEduBtn');

function createEducationField() {
  const id = Date.now();

  const group = document.createElement('div');
  group.className = 'dynamic-group';
  group.setAttribute('data-id', id);

  group.innerHTML = `
    <input type="text" class="edu-degree" placeholder="Degree / Diploma (e.g. DIT)" />
    <input type="text" class="edu-institute" placeholder="Institute / University" />
    <input type="text" class="edu-year" placeholder="Year (e.g. 2022 - 2024)" />
    <button type="button" class="remove-btn">Remove</button>
  `;

  const previewItem = document.createElement('div');
  previewItem.className = 'preview-item';
  previewItem.setAttribute('data-id', id);
  previewItem.innerHTML = `
    <p><strong class="prev-degree">Degree / Diploma</strong> - <span class="prev-institute">Institute Name</span> (<span class="prev-year">Year</span>)</p>
  `;

  eduInputsContainer.appendChild(group);
  eduPreviewContainer.appendChild(previewItem);

  const degInput = group.querySelector('.edu-degree');
  const instInput = group.querySelector('.edu-institute');
  const yrInput = group.querySelector('.edu-year');

  const prevDeg = previewItem.querySelector('.prev-degree');
  const prevInst = previewItem.querySelector('.prev-institute');
  const prevYr = previewItem.querySelector('.prev-year');

  degInput.addEventListener('input', () => prevDeg.textContent = degInput.value || 'Degree / Diploma');
  instInput.addEventListener('input', () => prevInst.textContent = instInput.value || 'Institute Name');
  yrInput.addEventListener('input', () => prevYr.textContent = yrInput.value || 'Year');

  group.querySelector('.remove-btn').addEventListener('click', () => {
    group.remove();
    previewItem.remove();
  });
}

createEducationField();
addEduBtn.addEventListener('click', createEducationField);

// DYNAMIC FORM ENTRIES 
const expInputsContainer = document.getElementById('experienceInputsContainer');
const expPreviewContainer = document.getElementById('experiencePreviewContainer');
const addExpBtn = document.getElementById('addExpBtn');

function createExperienceField() {
  const id = Date.now();

  const group = document.createElement('div');
  group.className = 'dynamic-group';
  group.setAttribute('data-id', id);

  group.innerHTML = `
    <input type="text" class="exp-role" placeholder="Job Title (e.g. Frontend Developer)" />
    <input type="text" class="exp-company" placeholder="Company / Organization" />
    <textarea class="exp-desc" placeholder="Key responsibilities or achievements..."></textarea>
    <button type="button" class="remove-btn">Remove</button>
  `;

  const previewItem = document.createElement('div');
  previewItem.className = 'preview-item';
  previewItem.setAttribute('data-id', id);
  previewItem.innerHTML = `
    <h4 class="prev-role">Job Title</h4>
    <p class="company-name prev-company">Company Name</p>
    <p class="prev-desc">Description of key responsibilities and achievements...</p>
  `;

  expInputsContainer.appendChild(group);
  expPreviewContainer.appendChild(previewItem);

  const roleInput = group.querySelector('.exp-role');
  const compInput = group.querySelector('.exp-company');
  const descInput = group.querySelector('.exp-desc');

  const prevRole = previewItem.querySelector('.prev-role');
  const prevComp = previewItem.querySelector('.prev-company');
  const prevDesc = previewItem.querySelector('.prev-desc');

  roleInput.addEventListener('input', () => prevRole.textContent = roleInput.value || 'Job Title');
  compInput.addEventListener('input', () => prevComp.textContent = compInput.value || 'Company Name');
  descInput.addEventListener('input', () => prevDesc.textContent = descInput.value || 'Description of key responsibilities...');

  group.querySelector('.remove-btn').addEventListener('click', () => {
    group.remove();
    previewItem.remove();
  });
}

createExperienceField();
addExpBtn.addEventListener('click', createExperienceField);

// PDF Download
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.print();
  });
}