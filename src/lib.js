const contentful = require('contentful');

module.exports.createClient = ({ space, accessToken }) => {
  const client = contentful.createClient({ space, accessToken });
  const getEntries = async (opts) => {
    opts.include = opts.include || 10;
    const entries = (await client.getEntries(opts)).items;
    entries.map(function flatten(entry) {
      delete entry.sys;
      Object.assign(entry, entry.fields);
      delete entry.fields;
      Object.entries(entry).map(([k, v]) => {
        if (typeof v !== 'object') {
          return;
        }
        if (Array.isArray(v)) {
          v.map(flatten);
        } else {
          return flatten(v);
        }
      });
    });
    return entries;
  };
  const getEntry = async (id, opts = {}) => {
    return (await getEntries(Object.assign({ 'sys.id': id }, opts)))[0];
  };
  return { getEntries, getEntry };
};
