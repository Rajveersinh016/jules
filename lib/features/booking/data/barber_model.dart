class BarberModel {
  final String id;
  final String name;
  final String specialization;
  final String bio;
  final double rating;
  final int reviewCount;
  final String imageUrl;
  final bool isAvailable;

  BarberModel({
    required this.id,
    required this.name,
    required this.specialization,
    required this.bio,
    required this.rating,
    required this.reviewCount,
    required this.imageUrl,
    required this.isAvailable,
  });
}
