'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async login() {
    const ctx = this.ctx;
    console.log(ctx.request.body)
    const user = await ctx.service.user.login(ctx.request.body);
    ctx.body = user;
  }
}

module.exports = HomeController;
