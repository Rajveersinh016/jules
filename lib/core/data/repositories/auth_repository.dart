import 'package:final_touch/core/data/mock_database.dart';
import 'package:final_touch/features/auth/data/user_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

abstract class AuthRepository {
  Future<UserModel> login(String email, String password);
  Future<void> logout();
  Stream<UserModel?> get authStateChanges;
}

class MockAuthRepository implements AuthRepository {
  @override
  Future<UserModel> login(String email, String password) async {
    await Future.delayed(const Duration(seconds: 1)); // Simulate network
    // For demo, accept any login and return the mock user
    return MockDatabase.currentUser;
  }

  @override
  Future<void> logout() async {
    await Future.delayed(const Duration(milliseconds: 500));
  }

  @override
  Stream<UserModel?> get authStateChanges => Stream.value(MockDatabase.currentUser);
}

final authRepositoryProvider = Provider<AuthRepository>((ref) {
  return MockAuthRepository();
});
