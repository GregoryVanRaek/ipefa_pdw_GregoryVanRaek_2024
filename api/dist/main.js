"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const exception_1 = require("./common/exception");
const app_module_1 = require("./root/app.module");
const documentation_1 = require("./common/documentation");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new exception_1.HttpExceptionFilter());
    documentation_1.swaggerConfiguration.config(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map