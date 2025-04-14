import localForage from 'localforage';
import { APP_NAME } from '~/constants/branding';

const userDataStorage = localForage.createInstance({
    driver: [
        localForage.INDEXEDDB,
        localForage.LOCALSTORAGE,
        localForage.WEBSQL,
    ],
    name: APP_NAME + '-userData',
});

export default userDataStorage;