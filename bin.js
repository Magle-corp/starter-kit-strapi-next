#!/usr/bin/env node

const {execSync} = require("child_process");
const textColorRed = "\x1b[31m";
const textColorReset = "\x1b[0m";

// Console log message with red color.
function consoleError(message) {
    console.log(textColorRed + message + textColorReset);
}

// Execute bash command.
function runCommand(command) {
    try {
        execSync(`${command}`, {stdio: "inherit"});
    } catch (err) {
        consoleError(`\x1b[31mFailed to execute "${command}"`, err, "\x1b[0m");
        return false;
    }
    return true;
}

// Stop process if the project name is not specified.
if (!process.argv[2]) {
    consoleError("No project name specified. Try run : npx starter-kit-strapi-next <project name>");
    return false;
}

const projectName = process.argv[2];

runCommand(
    `git clone git@github.com:Magle-corp/starter-kit-strapi-next.git ${projectName}`
);
runCommand(
    `git clone git@github.com:Magle-corp/starter-strapi.git ${projectName}/${projectName}-backend`
);
runCommand(
    `git clone git@github.com:Magle-corp/starter-next.git ${projectName}/${projectName}-frontend`
);

const foldersToRemove = [
    'starter-strapi',
    'starter-next',
    '.git',
    `${projectName}-backend/.git`,
    `${projectName}-frontend/.git`,
    'package.json',
    'bin.js'
];

const filesToRemove = [
    '.gitmodules',
    'README.md',
    `${projectName}-backend/README.md`,
    `${projectName}-frontend/README.md`,
];

foldersToRemove.forEach(folderToRemove => {
    runCommand(`rm -rf ${projectName}/${folderToRemove}`);
});
filesToRemove.forEach(fileToRemove => {
    runCommand(`rm ${projectName}/${fileToRemove}`);
})

runCommand(`cp ${projectName}/docs/README_new_project.md ${projectName}/README.md`)
runCommand(`rm -rf ${projectName}/docs`);

runCommand(`cp ${projectName}/${projectName}-backend/environments/.env.development ${projectName}/${projectName}-backend/environments/.env`);
runCommand(`cp ${projectName}/${projectName}-frontend/environments/.env.development ${projectName}/${projectName}-frontend/environments/.env`);

const filesToFix = [
    `README.md`,
    `docker-compose.yml`,
    `${projectName}-backend/environments/.env`
];

filesToFix.forEach(fileToFix => {
    runCommand(`sed -i 's/starter-kit-strapi-next/${projectName}/g' ${projectName}/${fileToFix}`)
    runCommand(`sed -i 's/starter-strapi/${projectName}-backend/g' ${projectName}/${fileToFix}`)
    runCommand(`sed -i 's/starter-next/${projectName}-frontend/g' ${projectName}/${fileToFix}`)
});