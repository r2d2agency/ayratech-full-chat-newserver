export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

interface LogData {
  message: string;
  level?: LogLevel;
  context?: any;
  stack_trace?: string;
}

const getUserEmail = (): string | null => {
  try {
    const promoter = localStorage.getItem('promotor_employee');
    if (promoter) {
      const p = JSON.parse(promoter);
      if (p?.email) return p.email;
    }
    const agency = localStorage.getItem('agency_user');
    if (agency) {
      const a = JSON.parse(agency);
      if (a?.email) return a.email;
    }
    const supermarket = localStorage.getItem('supermarket_user');
    if (supermarket) {
      const s = JSON.parse(supermarket);
      if (s?.email) return s.email;
    }
    return localStorage.getItem('user_email');
  } catch {
    return null;
  }
};

const getDeviceInfo = () => ({
  userAgent: navigator.userAgent,
  language: navigator.language,
  platform: (navigator as any).platform,
  vendor: navigator.vendor,
  screen: `${window.screen.width}x${window.screen.height}`,
  online: navigator.onLine,
});

export const logger = {
  async log({ message, level = 'info', context = {}, stack_trace }: LogData) {
    try {
      const consoleMethod = level === 'fatal' ? 'error' : (level === 'warn' ? 'warn' : (level === 'error' ? 'error' : 'log'));
      // eslint-disable-next-line no-console
      (console as any)[consoleMethod](`[${level.toUpperCase()}] ${message}`, context);

      // Logs remain available in the browser console. Remote persistence must
      // go through the application's own API, never a browser database client.
      void getUserEmail();
      void getDeviceInfo();
      void stack_trace;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to process log:', err);
    }
  },

  debug(message: string, context?: any) {
    return this.log({ message, level: 'debug', context });
  },
  info(message: string, context?: any) {
    return this.log({ message, level: 'info', context });
  },
  warn(message: string, context?: any) {
    return this.log({ message, level: 'warn', context });
  },
  error(message: string, context?: any, error?: Error) {
    return this.log({ message, level: 'error', context, stack_trace: error?.stack });
  },
  fatal(message: string, context?: any, error?: Error) {
    return this.log({ message, level: 'fatal', context, stack_trace: error?.stack });
  },
};
