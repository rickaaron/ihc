import AppModal from './views/modal_error.vue'

const ModalError = {

    install(Vue, options) {

        this.EventBus = new Vue()


        Vue.component('app-modal', AppModal)

        Vue.prototype.$modal_error = {
            show(errors) {

                ModalError.EventBus.$emit('show', errors)
            }
        }
    }
}

export default ModalError