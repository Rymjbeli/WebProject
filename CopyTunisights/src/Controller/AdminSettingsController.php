<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminSettingsController extends AbstractController
{
    #[Route('/adminSettings', name: 'app_admin_settings')]
    public function index(): Response
    {
        return $this->render('AdminSettings.html.twig');
    }
}
