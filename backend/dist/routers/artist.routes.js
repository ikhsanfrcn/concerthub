"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistRouter = void 0;
const express_1 = require("express");
const artist_controller_1 = require("../controller/artist.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const uploader_1 = require("../helpers/uploader");
class ArtistRouter {
    constructor() {
        (this.router = (0, express_1.Router)()), (this.artistController = new artist_controller_1.ArtistController());
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initializeRoute();
    }
    initializeRoute() {
        this.router.get("/", this.artistController.getArtist);
        this.router.post("/", (0, uploader_1.uploader)("memoryStorage", "art-").single("image"), this.artistController.addArtist);
    }
    getRouter() {
        return this.router;
    }
}
exports.ArtistRouter = ArtistRouter;
