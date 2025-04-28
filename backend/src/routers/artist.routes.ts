import { Router } from "express";
import { ArtistController } from "../controller/artist.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { uploader } from "../helpers/uploader";

export class ArtistRouter {
  private router: Router;
  private artistController: ArtistController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    (this.router = Router()), (this.artistController = new ArtistController());
    this.authMiddleware = new AuthMiddleware();

    this.initializeRoute();
  }

  initializeRoute() {
    this.router.get("/", this.artistController.getArtist);
    this.router.post(
      "/",
      uploader("memoryStorage", "art-").single("image"),
      this.artistController.addArtist
    );
  }

  getRouter() {
    return this.router;
  }
}
