import { createProxyMiddleware } from "http-proxy-middleware";
import { Application } from "express";

module.exports = function (app: Application) {
  app.use(
    "/dapi",
    createProxyMiddleware({
      target: "https://www.swiggy.com",
      changeOrigin: true,
    })
  );
};
