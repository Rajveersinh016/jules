import 'package:final_touch/core/router/app_router.dart';
import 'package:final_touch/core/theme/app_theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Firebase initialization would go here in a real app
  // await Firebase.initializeApp();

  runApp(const ProviderScope(child: FinalTouchApp()));
}

class FinalTouchApp extends ConsumerWidget {
  const FinalTouchApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(goRouterProvider);

    return MaterialApp.router(
      title: 'Final Touch',
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      routerConfig: router,
      debugShowCheckedModeBanner: false,
    );
  }
}
