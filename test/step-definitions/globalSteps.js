import Hooks from '../hooks/hooks.js';
import { Before, After } from '@wdio/cucumber-framework';

Before(async function() {
    await Hooks.beforeTest();
});

After(async function() {
    await Hooks.afterTest();
});
