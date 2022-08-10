import React from 'react'
import { ModalRootContext } from '@vkontakte/vkui'

export const useModal = () => React.useContext(ModalRootContext)

export const useModalClose = () => useModal().onClose

export const useModalUpdateHeight = () => useModal().updateModalHeight
