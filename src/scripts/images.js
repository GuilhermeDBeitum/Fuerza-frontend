/**
 *
 * Automatically import images.
 * You don't need to edit this file!
 *
 */
const allImages = require.context('@images', true, /\.(ico|jpg|jpeg|png|webp|svg|gif)$/);

allImages.keys()
  .forEach(allImages);
