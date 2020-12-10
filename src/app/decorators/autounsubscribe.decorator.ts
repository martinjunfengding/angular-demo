import { Subscription } from 'rxjs';

export function AutoUnsubscribe(constructor: any) {
    const originalNgOnDestroyFn = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function (...args: any) {
        // Call the original ngOnDestroy first.
        if (originalNgOnDestroyFn && typeof originalNgOnDestroyFn === 'function') {
            originalNgOnDestroyFn.apply(this, args);
        }

        // Iterate over all properties and call the unsubscribe if available and not closed.
        for (const prop in this) {
            if (Object.prototype.hasOwnProperty.call(this, prop)) {
                const property = this[prop];
                //  unsubscribe if the subject is still open.
                if (property && typeof property.unsubscribe === 'function' && !property.closed && property instanceof Subscription) {
                    console.log(property)
                    // property.unsubscribe();
                    console.log(`unsubscribed!`)
                }
            }
        }
    };
}
