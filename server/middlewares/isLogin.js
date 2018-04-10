/**
 * 拦截未登录请求
 */
module.exports = function () {
    const noUseLoginEvent = {
        register: true,
        login: true,
        loginByToken: true,
        guest: true,
    };
    return async (ctx, next) => {
        if (!noUseLoginEvent[ctx.event] && !ctx.socket.user) {
            ctx.res = '请登录后再试';
            return;
        }
        await next();
    };
};