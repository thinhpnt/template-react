#!/usr/bin/env node
import { Command } from "commander";
import degit from "degit";
import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";

const program = new Command();

program
  .name("zoa-template-client")
  .description("CLI để tạo project từ template")
  .argument("<project-name>", "Tên folder project")
  .action(async (projectName) => {
    const targetDir = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(targetDir)) {
      console.error(`❌ Folder ${projectName} đã tồn tại!`);
      process.exit(1);
    }

    console.log(`🚀 Tạo project ${projectName}...`);

    // clone template từ repo public
    const emitter = degit("thinhpnt/template-react", {
      cache: false,
      force: true,
      verbose: true,
    });

    try {
      await emitter.clone(targetDir);
      console.log("✅ Clone template xong!");
      console.log(`👉 Vào folder: cd ${projectName}`);

      // check Node version
      // const required = 22;
      // const current = parseInt(process.versions.node.split(".")[0], 10);

      // if (current < required) {
      //   console.warn(
      //     `⚠️  Node.js version hiện tại: v${process.versions.node}. ` +
      //     `Cần >= v${required}. Hãy update Node trước khi chạy npm install.`
      //   );
      //   process.exit(1);
      // }

      // console.log("📦 Node version hợp lệ. Đang cài dependencies...");
      // execSync("npm install", { stdio: "inherit", cwd: targetDir });

      // console.log(`🎉 Done!`);
      // console.log(`   cd ${projectName}`);
      // console.log("   npm run dev");
    } catch (err) {
      console.error("❌ Lỗi:", err);
      process.exit(1);
    }
  });

program.parse();
