var ENV = process.env.NODE_ENV || 'development';

console.log('Your environment is:\n');

if (ENV === 'production') {
  console.log('production');
} else if (ENV === 'development') {
  console.log('development');
} else if (ENV === 'testing') {
  console.log('testing');
} else {
  console.log('unrecognized');
}
