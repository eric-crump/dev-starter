import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";
Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
    "api_key": process.env.API_KEY,
    "delivery_token": process.env.DELIVERY_TOKEN,
    "environment": process.env.ENVIRONMENT,
    live_preview: {
        //management_token: 'cs8a11aaa477e98c85779f6cfc',
        preview_token: process.env.PREVIEW_TOKEN,
        enable: true,
        //host: 'api.contentstack.io',
        host: 'rest-preview.contentstack.com'
    }
});

ContentstackLivePreview.init({
    stackSdk: Stack,
    clientUrlParams: {
        protocol: "https",
        host: "app.contentstack.com",
        port: 443,
    },
  });

export default {
    getElement(id, type, locale) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Entry(id)
                .language(locale ? locale : 'en')
                .toJSON()
                .fetch()
                .then(
                    function success(entry) {
                        Contentstack.Utils.addEditableTags(entry, type, true, locale);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getElementWithRefs(id, type, locale, references) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Entry(id)
                .includeReference(...references)
                .language(locale ? locale : 'en')
                .toJSON()
                .fetch()
                .then(
                    function success(entry) {
                        Contentstack.Utils.addEditableTags(entry, type, true, locale);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getElementByUrl(type, url, locale) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .where('url', { '$eq': url })
                .language(locale ? locale : 'en')
                .toJSON()
                .find()
                .then(
                    function success(data) {
                        const entry = data[0][0];
                        Contentstack.Utils.addEditableTags(entry, type, true, locale);
                        resolve(entry);
                    },
                    function error(err) {
                        reject(err);
                    }
                );
        })
    },

    getElementByType(type, locale){
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .language(locale ? locale : 'en')
                .toJSON()
                .find()
                .then(
                    function success(entry) {
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    // get nav call
    getStack() {
        return Stack;
    }
};

export const onEntryChange = ContentstackLivePreview.onEntryChange;