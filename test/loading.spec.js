import Vue from 'vue';
import MuseUI from 'muse-ui';
import Loading from '../src';

Vue.use(MuseUI);

test('Test config', () => {
  const config = Loading.config({
    overlayColor: 'rgba(0, 0, 0, .7)'
  });
  expect(config).toEqual({
    overlayColor: 'rgba(0, 0, 0, .7)',
    size: 48,
    color: 'primary'
  });
});

test('Test install', () => {
  Vue.use(Loading, {
    size: 24
  });

  expect(Loading.config().size).toBe(24);
  expect(Vue.prototype.$loading).toBe(Loading);
});

test('Test loading', () => {
  const loading = Loading({
    text: 'loading',
    overlayColor: '#fff',
    color: 'secondary',
    size: 24
  });

  expect(loading.instance.text).toBe('loading');
  expect(loading.instance.overlayColor).toBe('#fff');
  expect(loading.instance.color).toBe('secondary');
  expect(loading.instance.size).toBe(24);
  expect(loading.instance.show).toBe(true);

  loading.close();
  expect(loading.instance).toBe(null);
});
