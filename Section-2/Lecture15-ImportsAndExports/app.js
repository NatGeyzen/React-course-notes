// IMPORTING DEFAULT EXPORTS
import person from '/person.js';                                    // 'person' can be replaced by any name

// IMPORTING NAMED EXPORTS

    // importing specific elements
    import { clean, BaseData } from '/utility.js';                  // name defined in exported file MUST be used

    // importing specific elements
    import { clean as cln, BaseData as bd} from '/utility.js';      // named exports can be given an alias

    // importing everything
    import * as bundled from '/utility.js';