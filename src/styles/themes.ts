import { themeType } from '../types'

const darkTheme: themeType = {
  mainBackgroundColor: '#3B4664',
  padBackgroundColor: '#252D44',
  displayBackgroundColor: '#181F32',
  displayColor: '#FFFFFF',
  headerColor: '#FFFFFF',
  toggleBackgroundColor: '#181F32',
  toggleSwitchColor: '#D03E33',
  squareKeyBackgroundColor: '#EAE3DB',
  squareKeyShadow: '#B3A296',
  squareKeyColor: '#484C56',
  deleteKeyBackgroundColor: '#647299',
  deleteKeyShadow: '#414E76',
  deleteKeyColor: '#F7FCFE',
  resetKeyBackgroundColor: '#647299',
  resetKeyShadow: '#414E76',
  resetKeyColor: '#F7FCFE',
  equalsKeyBackgroundColor: '#D13E2F',
  equalsKeyShadow: '#972416',
  equalsKeyColor: '#F7FCFE',
}

const lightTheme: themeType = {
  mainBackgroundColor: '#E6E6E6',
  padBackgroundColor: '#D3CDCD',
  displayBackgroundColor: '#EEEEEE',
  displayColor: '#37372C',
  headerColor: '#37372C',
  toggleBackgroundColor: '#D4CDCD',
  toggleSwitchColor: '#C15700',
  squareKeyBackgroundColor: '#E5E4E0',
  squareKeyShadow: '#A79F95',
  squareKeyColor: '#37372C',
  deleteKeyBackgroundColor: '#388185',
  deleteKeyShadow: '#1C6066',
  deleteKeyColor: '#EEEEEE',
  resetKeyBackgroundColor: '#388185',
  resetKeyShadow: '#1C6066',
  resetKeyColor: '#EEEEEE',
  equalsKeyBackgroundColor: '#C85402',
  equalsKeyShadow: '#8B3801',
  equalsKeyColor: '#EEEEEE',
}

const partyTheme: themeType = {
  mainBackgroundColor: '#18052A',
  padBackgroundColor: '#1E0935',
  displayBackgroundColor: '#1E0935',
  displayColor: '#FFE43E',
  headerColor: '#FFE43E',
  toggleBackgroundColor: '#1E0935',
  toggleSwitchColor: '#00DECF',
  squareKeyBackgroundColor: '#331B4D',
  squareKeyShadow: '#831F99',
  squareKeyColor: '#FFE43E',
  deleteKeyBackgroundColor: '#5A057C',
  deleteKeyShadow: '#AE1DE1',
  deleteKeyColor: '#FFFCFF',
  resetKeyBackgroundColor: '#55087C',
  resetKeyShadow: '#BF16F5',
  resetKeyColor: '#FFFCFF',
  equalsKeyBackgroundColor: '#00DECF',
  equalsKeyShadow: '#6EF9F0',
  equalsKeyColor: '#1E0935',
}

const themes = [darkTheme, lightTheme, partyTheme]

export default themes
