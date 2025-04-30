import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScreenSize() {
  const width = ref(window.innerWidth)

  const handleResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  const isMobile: boolean = width.value <= 640
  const isDesktop: boolean = width.value >= 1024

  return {
    isMobile,
    isDesktop,
  }
}
