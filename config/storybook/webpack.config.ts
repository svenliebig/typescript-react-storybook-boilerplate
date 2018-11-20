import webpack from "webpack"
import BaseConfig from "../webpack.config.base"
import { resolve } from "path"

const StorybookConfig = (base: { [T in keyof webpack.Configuration]-?: webpack.Configuration[T] }): webpack.Configuration => {
	base.context = resolve(__dirname, "..", "..")
	base.mode = "development"
	base.module.rules.push(...BaseConfig.module!.rules)
	base.resolve.extensions!.push(...BaseConfig.resolve!.extensions!)
	base.resolve.alias = {
		...BaseConfig.resolve!.alias
	}
	return base
}

export default StorybookConfig