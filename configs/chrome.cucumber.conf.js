import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";


export const config = {
    ...mainConfig,
    ...{
        framework: 'cucumber',
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js'],
        },
        specs: [
            '../test/features/**/*.feature'
        ],
        reporters: ['spec',
            ['allure',
                {
                    outputDir: 'allure-results',
                    disableWebdriverStepsReporting: false,
                    disableWebdriverScreenshotsReporting: false,
                    useCucumberStepReporter: true,
                    disableMochaHooks: true
                },
            ]
        ],
        capabilities: [
            {
                browserName: "chrome",
                "goog:chromeOptions": {
                    prefs: {
                        "download.default_directory": downloadDir
                    }
                },
            },
        ],
    },
};