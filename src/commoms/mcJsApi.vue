<template>
</template>
<script>
export default {
  components: {
    'mcJsApi': {
      render(createElement) {
        return createElement(
          'script',
          {
            attrs: {
              type: 'text/javascript',
              src: 'https://mall-res.manboker.com/lib/mcJsApi.js?v=88',
            },
          },
        );
      },
    },
  },
}
</script>

<style>

</style>

