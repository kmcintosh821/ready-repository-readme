function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';

    case 'GNU General Public License v3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';

    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';

    case 'BSD 2-Clause "Simplified" License':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';

    case 'BSD 3-Clause "New" or "Revised" License':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';

    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';

    case 'Creative Commons Zero v1.0 Universal':
      return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)';

    case 'Eclipse Public License 2.0':
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';

    case 'GNU Affero General Public License v3.0':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';

    case 'GNU General Public License v2.0':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';

    case 'GNU Lesser General Public License v3.0':
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';

    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';

    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
  }
}

function renderLicenseSection(license) {
  let licenseLink;
  switch (license) {
    case 'Apache License 2.0':
      licenseLink = '(https://opensource.org/licenses/Apache-2.0)';

    case 'GNU General Public License v3.0':
      licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)';

    case 'MIT License':
      licenseLink = '(https://opensource.org/licenses/MIT)';

    case 'BSD 2-Clause "Simplified" License':
      licenseLink = '(https://opensource.org/licenses/BSD-2-Clause)';

    case 'BSD 3-Clause "New" or "Revised" License':
      licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)';

    case 'Boost Software License 1.0':
      licenseLink = '(https://www.boost.org/LICENSE_1_0.txt)';

    case 'Creative Commons Zero v1.0 Universal':
      licenseLink = '(http://creativecommons.org/publicdomain/zero/1.0/)';

    case 'Eclipse Public License 2.0':
      licenseLink = '(https://opensource.org/licenses/EPL-1.0)';

    case 'GNU Affero General Public License v3.0':
      licenseLink = '(https://www.gnu.org/licenses/agpl-3.0)';

    case 'GNU General Public License v2.0':
      licenseLink = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';

    case 'GNU Lesser General Public License v3.0':
      licenseLink = '(https://www.gnu.org/licenses/lgpl-3.0)';

    case 'Mozilla Public License 2.0':
      licenseLink = '(https://opensource.org/licenses/MPL-2.0)';

    case 'The Unlicense':
      licenseLink = '(http://unlicense.org/)';
  }
  if (licenseLink.length)
    return `This repository uses the ${license} ${licenseLink}`
  else return `This repository does not have a license associated with it.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}\n
  ${licenseBadge}\n
  ## Table of Contents\n
- [Description](#description)\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Testing Instructions](#testing-instructions)\n
- [Contribution](#contribution)\n
- [Credits](#credits)\n
- [License](#license)\n
- [Questions](#questions)\n

  ## Description\n
  ${data.description}\n
  \n
  ## Installation\n
  ${data.installation}\n
  \n
  ## Usage\n
  ${data.usage}\n
  \n
  ## Testing Instructions\n
  ${data.tests}\n
  \n
  ## Contribution\n
  ${data.contribution}\n
  \n
  ## Credits\n
  ${data.credits}\n
  \n
  ## License\n
  ${licenseSection}\n
  \n
  ## Questions\n
  For any questions, contact ${data.username} through GitHub (https://github.com/${data.username}) or email at ${data.email}`;
}

module.exports = generateMarkdown;
