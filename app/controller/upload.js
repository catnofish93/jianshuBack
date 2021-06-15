const Controller = require('../core/baseController');
const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
class UploadController extends Controller {
  async upload() {
    const ctx = this.ctx;
    try {
      const stream = await ctx.getFileStream();
      const filename = new Date().getTime() + stream.filename; // stream对象也包含了文件名，大小等基本信息

      // 创建文件写入路径
      const target = path.join('./app', `static/${filename}`);

      const result = await new Promise((resolve, reject) => {
        // 创建文件写入流
        const remoteFileStrem = fs.createWriteStream(target);
        // 以管道方式写入流
        stream.pipe(remoteFileStrem);

        let errFlag;
        // 监听error事件
        remoteFileStrem.on('error', err => {
          errFlag = true;
          // 停止写入
          sendToWormhole(stream);
          remoteFileStrem.destroy();
          console.log(err);
          reject(err);
        });

        // 监听写入完成事件
        remoteFileStrem.on('finish', () => {
          if (errFlag) return;
          resolve({ filename, name: stream.fields.name });
        });
      });
      ctx.body = this.success(result);
    } finally {
      await ctx.cleanupRequestFiles();
    }
  }
}
module.exports = UploadController;
