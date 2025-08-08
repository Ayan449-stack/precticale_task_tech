import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000D1A',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  otpInput: {
    backgroundColor: '#1E2A38',
    width: 50,
    height: 50,
    borderRadius: 8,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  resend: {
    color: '#4DA1FF',
    textAlign: 'center',
    marginBottom: 20,
  },
  orText: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 16,
  },
});
