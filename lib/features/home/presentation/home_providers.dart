import 'package:final_touch/core/data/repositories/booking_repository.dart';
import 'package:final_touch/features/booking/data/service_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final servicesProvider = FutureProvider<List<ServiceModel>>((ref) {
  return ref.read(bookingRepositoryProvider).getServices();
});
