import 'package:final_touch/features/booking/presentation/booking_providers.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:gap/gap.dart';
import 'package:go_router/go_router.dart';

class BookingScreen extends ConsumerWidget {
  const BookingScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final barbersAsync = ref.watch(barbersProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Select Barber')),
      body: barbersAsync.when(
        data: (barbers) => ListView.separated(
          padding: const EdgeInsets.all(16),
          itemCount: barbers.length,
          separatorBuilder: (context, index) => const Gap(16),
          itemBuilder: (context, index) {
            final barber = barbers[index];
            return Card(
              child: ListTile(
                leading: CircleAvatar(
                  backgroundImage: NetworkImage(barber.imageUrl),
                  radius: 28,
                ),
                title: Text(barber.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                subtitle: Text(barber.specialization),
                trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                onTap: () {
                  // Show Confirmation Dialog
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: const Text('Confirm Booking'),
                      content: Text('Book appointment with ${barber.name}?'),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Cancel'),
                        ),
                        ElevatedButton(
                          onPressed: () {
                            Navigator.pop(context); // Close dialog
                            context.go('/dashboard'); // Go to dashboard (simulating success)
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Booking Confirmed!')),
                            );
                          },
                          child: const Text('Confirm'),
                        ),
                      ],
                    ),
                  );
                },
              ),
            );
          },
        ),
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (err, stack) => Center(child: Text('Error: $err')),
      ),
    );
  }
}
