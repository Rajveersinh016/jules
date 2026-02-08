import 'package:final_touch/core/data/repositories/booking_repository.dart';
import 'package:final_touch/features/booking/data/barber_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final barbersProvider = FutureProvider<List<BarberModel>>((ref) {
  return ref.read(bookingRepositoryProvider).getBarbers();
});
