import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export abstract class Destroyable {
  public destroyed$: Subject<void> = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
