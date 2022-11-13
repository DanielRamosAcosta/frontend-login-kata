import { RouterService } from "./RouterService.js";

export class RouterServiceReactRouter extends RouterService {
  constructor(navigate) {
    super();
    this.navigate = navigate;
  }

  navigateToSignUpSuccess() {
    this.navigate("/success");
  }
}
