const isStream = value => !!(value && typeof value.pipe === 'function');

export default isStream;
