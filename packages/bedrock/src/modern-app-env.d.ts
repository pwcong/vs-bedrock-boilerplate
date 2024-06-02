/// <reference types='@modern-js/module-tools/types' />
/// <reference types='@modern-js/plugin-testing/types' />

/**
 * Thenable is a common denominator between ES6 promises, Q, jquery.Deferred, WinJS.Promise,
 * and others. This API makes no assumption about what promise library is being used which
 * enables reusing existing code without migrating to a specific promise implementation. Still,
 * we recommend the use of native promises which are available in this editor.
 */
interface Thenable<T> extends PromiseLike<T> { }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare namespace AMDLoader {
	interface ILoaderPlugin {
		load: (pluginParam: string, parentRequire: IRelativeRequire, loadCallback: IPluginLoadCallback, options: IConfigurationOptions) => void;
		write?: (pluginName: string, moduleName: string, write: IPluginWriteCallback) => void;
		writeFile?: (pluginName: string, moduleName: string, req: IRelativeRequire, write: IPluginWriteFileCallback, config: IConfigurationOptions) => void;
		finishBuild?: (write: (filename: string, contents: string) => void) => void;
	}
	interface IRelativeRequire {
		(dependencies: string[], callback: Function, errorback?: (error: Error) => void): void;
		toUrl(id: string): string;
	}
	interface IPluginLoadCallback {
		(value: any): void;
		error(err: any): void;
	}
	interface IConfigurationOptions {
		isBuild: boolean | undefined;
		[key: string]: any;
	}
	interface IPluginWriteCallback {
		(contents: string): void;
		getEntryPoint(): string;
		asModule(moduleId: string, contents: string): void;
	}
	interface IPluginWriteFileCallback {
		(filename: string, contents: string): void;
		getEntryPoint(): string;
		asModule(moduleId: string, contents: string): void;
	}
}
