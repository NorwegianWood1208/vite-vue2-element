<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
    render(createElement, context) {
        const { icon, title } = context.props
        const vnodes = []
        if (icon) {
            vnodes.push(
                createElement('svg-icon', {
                    attrs: {
                        'icon-class': icon
                    }
                })
            )
        }

        if (title) {
            vnodes.push(
                createElement(
                    'span',
                    {
                        slot: 'title'
                    },
                    title
                )
            )
        }
        return vnodes
    }
}
</script>
