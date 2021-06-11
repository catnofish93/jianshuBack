const Controller = require('../core/baseController');
const fs = require('fs')
const path = require('path')
class UploadController extends Controller {
  async upload() {
    const {ctx} = this;
    try {
      const file = ctx.request.files[0]
      const fileInfo = fs.readFileSync(file.filepath)
      const url = fs.writeFileSync('./app/static/test.jpeg', fileInfo)
      console.log(url)
      this.success({
        url: url
      });
    } finally {
      await ctx.cleanupRequestFiles()
    }
  }
}
module.exports = UploadController
